// Game data
const banners = {
    standard: [
        { name: "Legendary Sword", rarity: "5★", rate: 0.006 },
        { name: "Epic Shield", rarity: "5★", rate: 0.006 },
        { name: "Rare Bow", rarity: "4★", rate: 0.051 },
        { name: "Magic Staff", rarity: "4★", rate: 0.051 },
        { name: "Common Dagger", rarity: "3★", rate: 0.943 }
    ],
    event: [
        { name: "Event Hero★", rarity: "5★", rate: 0.012 },
        { name: "Special Weapon", rarity: "5★", rate: 0.012 },
        { name: "Featured 4★", rarity: "4★", rate: 0.051 },
        { name: "Event 4★", rarity: "4★", rate: 0.051 },
        { name: "Common Item", rarity: "3★", rate: 0.874 }
    ]
};

let gameState = {
    pity: 0,
    softPity: 0,
    inventory: [],
    currentBanner: 'standard'
};

// Load game state
function loadGame() {
    const saved = localStorage.getItem('WishGameStore');
    if (saved) {
        gameState = { ...gameState, ...JSON.parse(saved) };
    }
    updateUI();
}

// Save game state
function saveGame() {
    localStorage.setItem('WishGameStore', JSON.stringify(gameState));
}

// Update UI
function updateUI() {
    document.getElementById('pityCount').textContent = gameState.pity;
    document.getElementById('softPity').textContent = gameState.softPity;
    document.getElementById('bannerSelect').value = gameState.currentBanner;
    document.getElementById('inventoryCount').textContent = gameState.inventory.length;
    renderInventory();
}

// Single pull logic
function getPullResult() {
    gameState.pity++;
    
    // Soft pity (76+) and hard pity (90)
    const softPityActive = gameState.pity >= 76;
    const hardPity = gameState.pity >= 90;
    gameState.softPity = Math.max(0, gameState.softPity + 1);
    
    const currentBannerItems = banners[gameState.currentBanner];
    
    if (hardPity) {
        return currentBannerItems[0]; // Guaranteed 5★
    }
    
    // Rarity calculation with soft pity boost
    let rand = Math.random();
    if (softPityActive) {
        rand *= 0.3; // Boost 5★ chance after soft pity
    }
    
    // Determine rarity
    let rarity;
    if (rand < 0.006) rarity = '5★';
    else if (rand < 0.057) rarity = '4★';
    else rarity = '3★';
    
    // Get random item of that rarity
    const items = currentBannerItems.filter(item => item.rarity === rarity);
    return items[Math.floor(Math.random() * items.length)];
}

// Do pulls
function doPull(count) {
    const results = [];
    for (let i = 0; i < count; i++) {
        const result = getPullResult();
        results.push(result);
        gameState.inventory.push({ ...result, date: new Date().toLocaleString() });
        
        // Reset pity on 5★
        if (result.rarity === '5★') {
            gameState.pity = 0;
            gameState.softPity = 0;
        }
    }
    
    renderResults(results);
    saveGame();
    updateUI();
}

// Render pull results
function renderResults(results) {
    const container = document.getElementById('pullResults');
    container.innerHTML = results.map(item => 
        `<div class="result-item rarity-${item.rarity.replace('★', '')}">
            <strong>${item.name}</strong><br>
            <small>${item.rarity}</small>
        </div>`
    ).join('');
}

// Render inventory
function renderInventory() {
    const container = document.getElementById('inventoryList');
    const byRarity = {};
    gameState.inventory.forEach(item => {
        if (!byRarity[item.rarity]) byRarity[item.rarity] = [];
        byRarity[item.rarity].push(item);
    });
    
    container.innerHTML = Object.entries(byRarity)
        .map(([rarity, items]) => 
            `<div>
                <h4>${rarity} (${items.length})</h4>
                ${items.slice(-8).map(item => 
                    `<div class="inventory-item rarity-${rarity.replace('★', '')}" title="${item.date}">
                        ${item.name}
                    </div>`
                ).join('')}
            </div>`
        ).join('');
}

// Event listeners
document.getElementById('bannerSelect').addEventListener('change', (e) => {
    gameState.currentBanner = e.target.value;
    saveGame();
});

// Reset everything
function resetAll() {
    if (confirm('Reset all data? This cannot be undone.')) {
        gameState = { pity: 0, softPity: 0, inventory: [], currentBanner: 'standard' };
        localStorage.removeItem('WishGameStore');
        updateUI();
    }
}

// Initialize
loadGame();

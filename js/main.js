// Game Data - Exact WishGameHub style
const BANNERS = {
    event: [
        { name: "🌟 Event Hero Prime", rarity: "5★", rate: 0.006 },
        { name: "⚔️ Legendary Blade", rarity: "5★", rate: 0.006 },
        { name: "🎭 Mystic Dancer", rarity: "4★", rate: 0.051 },
        { name: "🏹 Shadow Archer", rarity: "4★", rate: 0.051 },
        { name: "🗡️ Common Sword", rarity: "3★", rate: 0.937 }
    ],
    standard: [
        { name: "👑 Eternal Emperor", rarity: "5★", rate: 0.006 },
        { name: "🛡️ Guardian Shield", rarity: "5★", rate: 0.006 },
        { name: "🔮 Crystal Mage", rarity: "4★", rate: 0.051 },
        { name: "⚡ Thunder Spear", rarity: "4★", rate: 0.051 },
        { name: "🛡️ Iron Sword", rarity: "3★", rate: 0.937 }
    ]
};

let gameState = {
    gems: 16000,
    pity: 0,
    softPity: 0,
    totalPulls: 0,
    fiveStars: 0,
    inventory: [],
    currentBanner: 'event',
    history: []
};

// Load/Save
function loadGame() {
    const saved = localStorage.getItem('WishGameStore');
    if (saved) gameState = { ...gameState, ...JSON.parse(saved) };
    updateUI();
}

function saveGame() {
    localStorage.setItem('WishGameStore', JSON.stringify(gameState));
}

// UI Updates
function updateUI() {
    document.getElementById('gems').textContent = gameState.gems.toLocaleString();
    document.getElementById('pity-counter').textContent = gameState.pity;
    document.getElementById('soft-pity').textContent = gameState.softPity;
    document.getElementById('total-pulls').textContent = gameState.totalPulls;
    document.getElementById('five-stars').textContent = gameState.fiveStars;
    document.getElementById('invCount').textContent = gameState.inventory.length;
    updateHistory();
}

// Pull Logic
function doPull(count) {
    const cost = count === 1 ? 160 : 1600;
    if (gameState.gems < cost) {
        alert('Not enough gems! Earn more by completing quests.');
        return;
    }

    gameState.gems -= cost;
    gameState.totalPulls += count;

    for (let i = 0; i < count; i++) {
        const result = getPullResult();
        gameState.inventory.push(result);
        gameState.history.unshift(result);
        
        if (result.rarity === '5★') {
            gameState.fiveStars++;
            gameState.pity = 0;
            gameState.softPity = 0;
            showFiveStarAnimation(result);
        } else {
            gameState.pity++;
            gameState.softPity = Math.max(0, gameState.softPity + 1);
        }
    }

    saveGame();
    updateUI();
    if (count === 1) showResult(gameState.history[0]);
}

function getPullResult() {
    const items = BANNERS[gameState.currentBanner];
    
    // Pity system
    if (gameState.pity >= 90) {
        return items.find(item => item.rarity === '5★') || items[0];
    }

    // Soft pity boost after 76 pulls
    let rateBoost = gameState.pity >= 76 ? 6 : 1;
    
    let rand = Math.random() * rateBoost;
    let rarity;
    
    if (rand < 0.006) rarity = '5★';
    else if (rand < 0.057) rarity = '4★';
    else rarity = '3★';

    const candidates = items.filter(item => item.rarity === rarity);
    return candidates[Math.floor(Math.random() * candidates.length)];
}

// Animations
function showResult(result) {
    const card = document.getElementById('resultCard');
    const nameEl = document.getElementById('resultName');
    const rarityEl = document.getElementById('resultRarity');
    const glow = document.getElementById('rarityGlow');

    nameEl.textContent = result.name;
    rarityEl.textContent = result.rarity;
    rarityEl.className = `rarity-${result.rarity.replace('★', '')}`;
    
    card.style.display = 'block';
    createSparkles();
    
    setTimeout(() => {
        card.style.display = 'none';
    }, 3000);
}

function showFiveStarAnimation(result) {
    document.body.style.background = 'linear-gradient(45deg, #ffd700, #ff6b6b)';
    setTimeout(() => {
        document.body.style.background = '#0a0a0a';
    }, 3000);
    
    // Gold sparkles
    for (let i = 0; i < 50; i++) {
        setTimeout(() => createSparkle('#ffd700'), i * 50);
    }
}

function createSparkles() {
    const sparkles = document.getElementById('sparkles');
    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 0.5 + 's';
        sparkles.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1500);
    }
}

// History & Inventory
function updateHistory() {
    const historyEl = document.getElementById('historyList');
    historyEl.innerHTML = gameState.history.slice(0, 8).map(item => 
        `<div class="history-item rarity-${item.rarity.replace('★', '')}">${item.name}</div>`
    ).join('');
}

function toggleInventory() {
    const modal = document.getElementById('inventoryModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    if (modal.style.display === 'block') renderInventory();
}

function renderInventory() {
    const grid = document.getElementById('inventoryGrid');
    const byRarity = {};
    
    gameState.inventory.forEach(item => {
        if (!byRarity[item.rarity]) byRarity[item.rarity] = [];
        byRarity[item.rarity].push(item);
    });
    
    grid.innerHTML = Object.entries(byRarity).map(([rarity, items]) => `
        <div>
            <h4>${rarity} (${items.length})</h4>
            ${items.slice(-12).map(item => 
                `<div class="inv-item rarity-${rarity.replace('★', '')}">${item.name}</div>`
            ).join('')}
        </div>
    `).join('');
}

// Event Listeners
document.querySelectorAll('.banner').forEach(banner => {
    banner.addEventListener('click', () => {
        document.querySelector('.banner.active').classList.remove('active');
        banner.classList.add('active');
        gameState.currentBanner = banner.dataset.banner;
        saveGame();
    });
});

// Init
loadGame();

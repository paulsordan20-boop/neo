(() => {
  const qs = s => document.querySelector(s);
  const qsa = s => document.querySelectorAll(s);

  // ===== CONFIGURATION - CUSTOMIZE YOUR MESSAGE AND GALLERY HERE =====
  const CONFIG = {
    // Your personal message that will be typed on the paper
    message: `To my greatest love❤️

If love were a language, you would be my favorite word. If it were a place, you would be my home. If it were a song, you would be the one I'd play on repeat for the rest of my life.

You make my days brighter, my worries lighter, and my world more beautiful just by being in it. I'm so grateful for your love, your smile, your laugh, and the way you care so deeply.

Choosing you is the best decision I've ever made. You brought light back into my darkest world. Every moment with you means everything to me.

I don't just love you for who you are, but for how I feel when I'm with you — safe, happy, understood, and completely myself.

Thank you for choosing me. I will always choose you. Today and every day.

I love you always, Catherina lei oh ❤`,
    // Gallery items - add your photos here
    // Format: { type: 'image', data: 'path/to/image.jpg', caption: 'Caption text' }
    gallery: [
      { type: 'image', data: 'images/86A00B86-6948-4793-A299-20B21CEFF0A0.jpg', caption: '' },
      { type: 'image', data: 'images/AE788B05-A9B1-4E2E-8FDA-E148D83414FE.jpg', caption: '' },
      { type: 'image', data: 'images/att.7O9YRD8pInz-hYsb9lmO4HeYuv0yQqX6HMafGC9oRMU.jpg', caption: '' },
      { type: 'image', data: 'images/att.8le9lQ_-RJG8vwG3yFhtb4u0V-O_XEBy5qIYQ5NKeeI.jpg', caption: '' },
      { type: 'image', data: 'images/att.c51F_xf1PJyYgzLiqvX64FGdWAIBV2QUua2RYVqe-sA.jpg', caption: '' },
      { type: 'image', data: 'images/att.G11Irv3wuwp2mLztLF8xobeL9GUUIMSnnPXp4AP1uwg.jpg', caption: '' },
      { type: 'image', data: 'images/att.oojU2aQjV8bNij07NjxzcsySVZzyrIQG5TS71AOnZlY.jpg', caption: '' },
      { type: 'image', data: 'images/att.r-cBPK_v-3y-MFOTM6zksO_2tKwalLhhJGcM2QDl0GY(1).jpg', caption: '' },
      { type: 'image', data: 'images/att.r-cBPK_v-3y-MFOTM6zksO_2tKwalLhhJGcM2QDl0GY.jpg', caption: '' },
      { type: 'image', data: 'images/att.Ws51AZLP5h__w4EpuAaSRlCsqe7qivdjTIZnjHNd8Dw.jpg', caption: '' },
      { type: 'image', data: 'images/att.zdkzT25b_9qo2nrLZypR48yhHtFPW5KrJ0YQuPATJtw.jpg', caption: '' },
      { type: 'image', data: 'images/IMG_1139.jpg', caption: '' },
      { type: 'image', data: 'images/IMG_1264.jpg', caption: '' },
      { type: 'image', data: 'images/IMG_1277.jpg', caption: '' },
      { type: 'image', data: 'images/IMG_1298.jpg', caption: '' },
      { type: 'image', data: 'images/IMG_1621.jpg', caption: '' },
      { type: 'image', data: 'images/IMG_2141.jpg', caption: '' },
      { type: 'image', data: 'images/IMG_2444.jpg', caption: '' },
      { type: 'image', data: 'images/IMG_2455.jpg', caption: '' },
      { type: 'image', data: 'images/IMG_2459.jpg', caption: '' },
      { type: 'image', data: 'images/IMG_2829.jpg', caption: '' },
      { type: 'image', data: 'images/IMG_3306.jpg', caption: '' },
      { type: 'image', data: 'images/IMG_3312.jpg', caption: '' },
      { type: 'image', data: 'images/IMG_3524.jpg', caption: '' },
      { type: 'image', data: 'images/IMG_3525.jpg', caption: '' },
      { type: 'image', data: 'images/IMG_3729.jpg', caption: '' },
      { type: 'image', data: 'images/IMG_3937.jpg', caption: '' },
      { type: 'image', data: 'images/IMG_4200.jpg', caption: '' },
      { type: 'image', data: 'images/IMG_4488.jpg', caption: '' },
      { type: 'image', data: 'images/IMG_5333.jpg', caption: '' },
      { type: 'image', data: 'images/IMG_5353.jpg', caption: '' },
      { type: 'image', data: 'images/IMG_5495.jpg', caption: '' },
      { type: 'image', data: 'images/IMG_5501.jpg', caption: '' },
      { type: 'image', data: 'images/IMG_6230.jpg', caption: '' },
      { type: 'image', data: 'images/IMG_6234.jpg', caption: '' },
      { type: 'image', data: 'images/IMG_6251.jpg', caption: '' },
      { type: 'image', data: 'images/IMG_6256.jpg', caption: '' },
      { type: 'image', data: 'images/IMG_6592.JPG', caption: '' },
      { type: 'image', data: 'images/IMG_6593.JPG', caption: '' },
      { type: 'image', data: 'images/IMG_6623.JPG', caption: '' },
      { type: 'image', data: 'images/IMG_6625.JPG', caption: '' },
      { type: 'image', data: 'images/IMG_6626.JPG', caption: '' },
      { type: 'image', data: 'images/IMG_6627.JPG', caption: '' },
      { type: 'image', data: 'images/IMG_6632.PNG', caption: '' },
      { type: 'image', data: 'images/IMG_6633.PNG', caption: '' },
      { type: 'image', data: 'images/IMG_6635.PNG', caption: '' },
      { type: 'image', data: 'images/IMG_6636(1).PNG', caption: '' },
      { type: 'image', data: 'images/IMG_6636.PNG', caption: '' },
      { type: 'image', data: 'images/IMG_8550.jpg', caption: '' }
    ],

    // Music tracks - you can add your own audio files
    music: {
      song: 'Passenger Seat.mp3'
    }
  };

  const POLAROID_EMOJIS = ['❤', '✨', '🌹', '💌', '🌸', '🫶', '💫', '🥰', '💖'];

  function getRandomEmoji() {
    return POLAROID_EMOJIS[Math.floor(Math.random() * POLAROID_EMOJIS.length)];
  }

  const valentineBackPhoto = qs('.valentine-photo-back');
  const firstGalleryImage = CONFIG.gallery.find(item => item.type === 'image');
  if (valentineBackPhoto && firstGalleryImage) {
    valentineBackPhoto.style.backgroundImage = `url('${firstGalleryImage.data}')`;
  }

  // ===== SECTION NAVIGATION =====
  const sections = qsa('.section');

  function showSection(sectionId) {
    sections.forEach(s => {
      s.classList.remove('active');
      s.style.display = 'none';
    });
    const section = qs(`#${sectionId}`);
    if (section) {
      section.style.display = 'flex';
      // Trigger reflow for animation
      void section.offsetWidth;
      section.classList.add('active');
    }
  }

  // ===== MUSIC PLAYER =====
  let currentAudio = null;
  const musicPlayer = qs('#music-player');
  const playBtn = qs('#play-music');
  const pauseBtn = qs('#pause-music');

  function toggleMusicPlaying(playing) {
    if (playing) {
      musicPlayer.classList.add('playing');
    } else {
      musicPlayer.classList.remove('playing');
    }
  }

  playBtn.addEventListener('click', () => {
    if (CONFIG.music.song) {
      if (!currentAudio) {
        currentAudio = new Audio(CONFIG.music.song);
        currentAudio.loop = true;
        currentAudio.volume = volumeSlider.value / 100;
      }
      currentAudio.play();
      toggleMusicPlaying(true);
    }
  });

  pauseBtn.addEventListener('click', () => {
    if (currentAudio) {
      currentAudio.pause();
    }
    toggleMusicPlaying(false);
  });

  // Volume control
  const volumeSlider = qs('#volume-slider');
  const volumeIcon = qs('#volume-icon');

  function updateVolumeIcon(vol) {
    if (vol == 0) volumeIcon.textContent = '🔇';
    else if (vol < 40) volumeIcon.textContent = '🔉';
    else volumeIcon.textContent = '🔊';
  }

  volumeSlider.addEventListener('input', () => {
    const vol = volumeSlider.value / 100;
    if (currentAudio) currentAudio.volume = vol;
    updateVolumeIcon(volumeSlider.value);
  });

  volumeIcon.addEventListener('click', () => {
    if (volumeSlider.value > 0) {
      volumeSlider.dataset.prev = volumeSlider.value;
      volumeSlider.value = 0;
      if (currentAudio) currentAudio.volume = 0;
    } else {
      volumeSlider.value = volumeSlider.dataset.prev || 70;
      if (currentAudio) currentAudio.volume = volumeSlider.value / 100;
    }
    updateVolumeIcon(volumeSlider.value);
  });

  // ===== VHS COUNTER =====
  let vhsSeconds = 0;
  const vhsCounter = qs('.vhs-counter');
  
  function updateVHSCounter() {
    const hrs = Math.floor(vhsSeconds / 3600).toString().padStart(2, '0');
    const mins = Math.floor((vhsSeconds % 3600) / 60).toString().padStart(2, '0');
    const secs = (vhsSeconds % 60).toString().padStart(2, '0');
    if (vhsCounter) {
      vhsCounter.textContent = `${hrs}:${mins}:${secs}`;
    }
    vhsSeconds++;
  }
  
  setInterval(updateVHSCounter, 1000);

  // ===== MAZE GAME =====
  const mazeIntro = qs('#maze-intro');
  const mazeGame = qs('#maze-game');
  const canvas = qs('#maze-canvas');
  const playerEl = qs('#player');
  const currentLevelDisplay = qs('#current-level');
  const restartBtn = qs('#restart-maze');

  const levelConfigs = {
    1: { gridSize: 15, difficulty: 'Easy' },
    2: { gridSize: 21, difficulty: 'Medium' },
    3: { gridSize: 25, difficulty: 'Hard' }
  };

  let currentLevel = 0;
  let ctx = null;
  let gameState = {
    maze: [],
    playerCellX: 0,
    playerCellY: 0,
    playerPixelX: 0,
    playerPixelY: 0,
    endX: 0,
    endY: 0,
    gridSize: 0,
    cellSize: 0,
    mazeWidth: 0,
    mazeHeight: 0,
    solved: false
  };

  let keysPressed = {};
  let currentPath = [];
  let pathIndex = 0;
  let animationRunning = false;
  let lastTimestamp = 0;

  function initializeCanvas() {
    const container = qs('.maze-container');
    if (!container) return;

    let containerWidth = Math.floor(container.clientWidth);

    // Fallback when container not yet laid out or hidden
    if (containerWidth < 50) {
      // Try to get a reasonable size based on viewport
      containerWidth = Math.min(window.innerWidth - 60, 500);
    }

    const maxSize = Math.min(containerWidth, 500);

    // Ensure we have a minimum viable size
    const finalSize = Math.max(maxSize, 200);

    canvas.width = finalSize;
    canvas.height = finalSize;
    canvas.style.width = finalSize + 'px';
    canvas.style.height = finalSize + 'px';
    ctx = canvas.getContext('2d');

    if (currentLevel > 0 && gameState.gridSize > 0) {
      const cellSize = Math.max(1, Math.floor(finalSize / gameState.gridSize));
      gameState.cellSize = cellSize;
      gameState.mazeWidth = finalSize;
      gameState.mazeHeight = finalSize;
      gameState.playerPixelX = gameState.playerCellX * cellSize + cellSize / 2;
      gameState.playerPixelY = gameState.playerCellY * cellSize + cellSize / 2;
      drawMaze();
      updatePlayerDisplay();
    }
  }

  initializeCanvas();
  window.addEventListener('resize', initializeCanvas);

  function generateMaze(gridSize) {
    const maze = Array(gridSize).fill(null).map(() => Array(gridSize).fill(1));

    function carve(x, y) {
      maze[y][x] = 0;
      const directions = [[0, -1], [1, 0], [0, 1], [-1, 0]].sort(() => Math.random() - 0.5);

      for (const [dx, dy] of directions) {
        const nx = x + dx * 2;
        const ny = y + dy * 2;

        if (nx > 0 && nx < gridSize - 1 && ny > 0 && ny < gridSize - 1 && maze[ny][nx] === 1) {
          maze[y + dy][x + dx] = 0;
          carve(nx, ny);
        }
      }
    }

    carve(1, 1);
    maze[1][1] = 0;
    maze[gridSize - 2][gridSize - 2] = 0;
    return maze;
  }

  function drawMaze() {
    if (!ctx) {
      ctx = canvas.getContext('2d');
    }
    if (!ctx) return;

    const { maze, cellSize, gridSize, endX, endY } = gameState;
    // Use canvas dimensions directly
    const mazeWidth = canvas.width;
    const mazeHeight = canvas.height;
    
    // Light B&W theme - path is light gray/white
    ctx.fillStyle = '#f5f5f5';
    ctx.fillRect(0, 0, mazeWidth, mazeHeight);

    // Walls are medium gray
    ctx.fillStyle = '#707070';
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        if (maze[y][x] === 1) {
          const px = x * cellSize;
          const py = y * cellSize;
          ctx.fillRect(px, py, cellSize, cellSize);
        }
      }
    }

    // Goal marker - red heart with glow (only splash of color)
    const gx = endX * cellSize + cellSize / 2;
    const gy = endY * cellSize + cellSize / 2;
    const heartSize = cellSize * 0.35;
    
    ctx.shadowColor = '#cc3355';
    ctx.shadowBlur = 15;
    ctx.fillStyle = '#cc3355';
    ctx.beginPath();
    ctx.moveTo(gx, gy + heartSize * 0.3);
    ctx.bezierCurveTo(gx, gy - heartSize * 0.3, gx - heartSize, gy - heartSize * 0.3, gx - heartSize, gy + heartSize * 0.1);
    ctx.bezierCurveTo(gx - heartSize, gy + heartSize * 0.6, gx, gy + heartSize, gx, gy + heartSize);
    ctx.bezierCurveTo(gx, gy + heartSize, gx + heartSize, gy + heartSize * 0.6, gx + heartSize, gy + heartSize * 0.1);
    ctx.bezierCurveTo(gx + heartSize, gy - heartSize * 0.3, gx, gy - heartSize * 0.3, gx, gy + heartSize * 0.3);
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  function updatePlayerDisplay() {
    const { cellSize, playerPixelX, playerPixelY } = gameState;
    
    // Scale from canvas intrinsic coordinates to displayed CSS coordinates
    const rect = canvas.getBoundingClientRect();
    const scaleX = rect.width / canvas.width;
    const scaleY = rect.height / canvas.height;
    
    const displayX = playerPixelX * scaleX;
    const displayY = playerPixelY * scaleY;
    const radius = Math.max(4, Math.floor(cellSize * 0.22 * Math.min(scaleX, scaleY)));

    playerEl.style.width = radius * 2 + 'px';
    playerEl.style.height = radius * 2 + 'px';
    const left = displayX - radius;
    const top = displayY - radius;
    playerEl.style.left = left + 'px';
    playerEl.style.top = top + 'px';
    playerEl.style.transition = 'none';
  }

  function movePlayer(dx, dy) {
    const { maze, gridSize, endX, endY, cellSize } = gameState;
    const newCellX = gameState.playerCellX + dx;
    const newCellY = gameState.playerCellY + dy;

    if (newCellX <= 0 || newCellX >= gridSize - 1 || newCellY <= 0 || newCellY >= gridSize - 1) {
      return;
    }

    if (maze[newCellY][newCellX] === 1) {
      return;
    }

    gameState.playerCellX = newCellX;
    gameState.playerCellY = newCellY;
    gameState.playerPixelX = newCellX * cellSize + cellSize / 2;
    gameState.playerPixelY = newCellY * cellSize + cellSize / 2;
    updatePlayerDisplay();

    if (gameState.playerCellX === endX && gameState.playerCellY === endY) {
      completeMaze();
    }
  }

  function findPath(startX, startY, endX, endY) {
    const { maze, gridSize } = gameState;
    const queue = [[startX, startY, []]];
    const visited = new Set();
    visited.add(`${startX},${startY}`);

    while (queue.length > 0) {
      const [x, y, path] = queue.shift();

      if (x === endX && y === endY) {
        return [[startX, startY], ...path];
      }

      const directions = [[0, -1], [1, 0], [0, 1], [-1, 0]];
      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;
        const key = `${nx},${ny}`;

        if (
          nx > 0 &&
          nx < gridSize - 1 &&
          ny > 0 &&
          ny < gridSize - 1 &&
          maze[ny] &&
          maze[ny][nx] === 0 &&
          !visited.has(key)
        ) {
          visited.add(key);
          queue.push([nx, ny, [...path, [nx, ny]]]);
        }
      }
    }

    return [];
  }

  function startPathFollow() {
    if (animationRunning) return;
    if (!currentPath || currentPath.length === 0) return;
    animationRunning = true;
    lastTimestamp = 0;
    requestAnimationFrame(pathFollowLoop);
  }

  function stopPathFollow() {
    animationRunning = false;
    lastTimestamp = 0;
    currentPath = [];
    pathIndex = 0;
  }

  function pathFollowLoop(timestamp) {
    if (!animationRunning) return;
    if (!lastTimestamp) lastTimestamp = timestamp;
    const dt = Math.max(0, (timestamp - lastTimestamp) / 1000);
    lastTimestamp = timestamp;

    if (!currentPath || pathIndex >= currentPath.length) {
      stopPathFollow();
      return;
    }

    const [txCell, tyCell] = currentPath[pathIndex];
    const tx = txCell * gameState.cellSize + gameState.cellSize / 2;
    const ty = tyCell * gameState.cellSize + gameState.cellSize / 2;

    const dx = tx - gameState.playerPixelX;
    const dy = ty - gameState.playerPixelY;
    const dist = Math.hypot(dx, dy);

    const speed = Math.max(120, gameState.cellSize * 5);
    const move = speed * dt;

    if (dist <= move + 0.5) {
      gameState.playerPixelX = tx;
      gameState.playerPixelY = ty;
      gameState.playerCellX = txCell;
      gameState.playerCellY = tyCell;
      pathIndex++;

      if (pathIndex >= currentPath.length) {
        updatePlayerDisplay();
        if (gameState.playerCellX === gameState.endX && gameState.playerCellY === gameState.endY) {
          completeMaze();
        }
        stopPathFollow();
        return;
      }
    } else {
      const ux = dx / dist;
      const uy = dy / dist;
      gameState.playerPixelX += ux * move;
      gameState.playerPixelY += uy * move;
    }

    updatePlayerDisplay();
    requestAnimationFrame(pathFollowLoop);
  }

  function movePlayerTowards(targetGridX, targetGridY) {
    const { maze, gridSize } = gameState;

    if (gameState.solved || currentLevel === 0) return;

    const targetX = Math.max(1, Math.min(gridSize - 2, targetGridX));
    const targetY = Math.max(1, Math.min(gridSize - 2, targetGridY));

    if (maze[targetY] && maze[targetY][targetX] === 1) {
      return;
    }

    const path = findPath(gameState.playerCellX, gameState.playerCellY, targetX, targetY);
    if (!path || path.length === 0) return;

    currentPath = path;
    if (currentPath.length > 0 && currentPath[0][0] === gameState.playerCellX && currentPath[0][1] === gameState.playerCellY) {
      pathIndex = 1;
    } else {
      pathIndex = 0;
    }
    startPathFollow();
  }

  function completeMaze() {
    if (gameState.solved) return;
    gameState.solved = true;

    // Transition to paper section with message
    setTimeout(() => {
      showSection('paper-section');
      startFallingPolaroids();
      startHandwritingAnimation();
    }, 500);
  }

  function startGame(level) {
    currentLevel = level;
    const config = levelConfigs[level];
    const gridSize = config.gridSize;

    currentLevelDisplay.textContent = `Level ${level} - ${config.difficulty}`;
    mazeIntro.style.display = 'none';
    mazeGame.style.display = 'block';

    // Wait for layout so the canvas measures correctly (double rAF for mobile)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        initializeCanvas();

        // Ensure minimum canvas size
        if (canvas.width < 200) {
          const fallbackSize = Math.min(Math.max(window.innerWidth - 60, 200), 500);
          canvas.width = fallbackSize;
          canvas.height = fallbackSize;
          canvas.style.width = fallbackSize + 'px';
          canvas.style.height = fallbackSize + 'px';
          ctx = canvas.getContext('2d');
        }

        const cellSize = Math.max(1, Math.floor(canvas.width / gridSize));

        gameState.gridSize = gridSize;
        gameState.cellSize = cellSize;
        gameState.mazeWidth = canvas.width;
        gameState.mazeHeight = canvas.height;
        gameState.playerCellX = 1;
        gameState.playerCellY = 1;
        gameState.playerPixelX = 1 * cellSize + cellSize / 2;
        gameState.playerPixelY = 1 * cellSize + cellSize / 2;
        gameState.endX = gridSize - 2;
        gameState.endY = gridSize - 2;
        gameState.solved = false;
        gameState.maze = generateMaze(gridSize);

        currentPath = [];
        pathIndex = 0;
        stopPathFollow();

        // Draw maze immediately and schedule another draw to ensure it renders
        drawMaze();
        updatePlayerDisplay();
        
        // Force redraw after a small delay to catch any timing issues
        setTimeout(() => {
          drawMaze();
          updatePlayerDisplay();
        }, 50);
      });
    });
  }

  // Click/drag movement (pointer events for consistent mouse/touch behavior)
  let isDragging = false;
  let lastPathUpdateTime = 0;
  let activePointerId = null;
  const pathThrottle = 16;

  // Helper to scale coordinates from display size to canvas intrinsic size
  function getScaledCanvasCoords(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY
    };
  }

  canvas.addEventListener('pointerdown', (e) => {
    if (!canvas || !ctx || gameState.cellSize === 0 || currentLevel === 0) return;
    e.preventDefault();

    const { x: pointerX, y: pointerY } = getScaledCanvasCoords(e.clientX, e.clientY);
    const radius = Math.max(14, Math.floor(gameState.cellSize * 0.35));
    const dx = pointerX - gameState.playerPixelX;
    const dy = pointerY - gameState.playerPixelY;
    const dist = Math.hypot(dx, dy);

    // Larger hitbox to make dragging reliable on touch
    if (dist <= radius * 3.5) {
      isDragging = true;
      activePointerId = e.pointerId;
      canvas.setPointerCapture(e.pointerId);
      lastPathUpdateTime = 0;
      movePlayerToPixel(pointerX, pointerY);
    }
  });

  canvas.addEventListener('pointermove', (e) => {
    if (!isDragging || activePointerId !== e.pointerId) return;
    const now = Date.now();
    if (now - lastPathUpdateTime >= pathThrottle) {
      lastPathUpdateTime = now;
      const { x, y } = getScaledCanvasCoords(e.clientX, e.clientY);
      movePlayerToPixel(x, y);
    }
  });

  canvas.addEventListener('pointerup', (e) => {
    if (activePointerId === e.pointerId) {
      isDragging = false;
      activePointerId = null;
      canvas.releasePointerCapture(e.pointerId);
    }
  });

  canvas.addEventListener('pointercancel', (e) => {
    if (activePointerId === e.pointerId) {
      isDragging = false;
      activePointerId = null;
    }
  });

  function movePlayerToClickPosition(e) {
    if (!canvas || !ctx || gameState.cellSize === 0 || currentLevel === 0) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    movePlayerToPixel(mouseX, mouseY);
  }

  function movePlayerToPixel(pixelX, pixelY) {
    const cellSize = gameState.cellSize;
    const maze = gameState.maze;
    const gridX = Math.floor(pixelX / cellSize);
    const gridY = Math.floor(pixelY / cellSize);

    function isWalkable(x, y) {
      return (
        x >= 0 && x < gameState.gridSize &&
        y >= 0 && y < gameState.gridSize &&
        maze[y] && maze[y][x] === 0
      );
    }

    if (isWalkable(gridX, gridY)) {
      movePlayerTowards(gridX, gridY);
      return;
    }

    let best = null;
    let bestDist = Infinity;
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        const nx = gridX + dx;
        const ny = gridY + dy;
        if (!isWalkable(nx, ny)) continue;
        const cx = nx * cellSize + cellSize / 2;
        const cy = ny * cellSize + cellSize / 2;
        const d = Math.hypot(cx - pixelX, cy - pixelY);
        if (d < bestDist) {
          bestDist = d;
          best = [nx, ny];
        }
      }
    }

    if (best) {
      movePlayerTowards(best[0], best[1]);
    }
  }

  // Touch handled via pointer events

  // Keyboard controls
  window.addEventListener('keydown', (e) => {
    keysPressed[e.key.toLowerCase()] = true;

    if (!gameState.solved && mazeGame && mazeGame.style.display !== 'none') {
      if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'w') movePlayer(0, -1);
      if (e.key === 'ArrowDown' || e.key.toLowerCase() === 's') movePlayer(0, 1);
      if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') movePlayer(-1, 0);
      if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') movePlayer(1, 0);
    }
  });

  window.addEventListener('keyup', (e) => {
    keysPressed[e.key.toLowerCase()] = false;
  });

  // Level buttons
  qs('#level-1-btn').addEventListener('click', () => startGame(1));
  qs('#level-2-btn').addEventListener('click', () => startGame(2));
  qs('#level-3-btn').addEventListener('click', () => startGame(3));

  restartBtn.addEventListener('click', () => {
    startGame(currentLevel);
  });

  // ===== FALLING POLAROIDS =====
  const fallingPolaroidsContainer = qs('#falling-polaroids');
  let polaroidInterval = null;
  const fallingImageItems = CONFIG.gallery.filter(item => item.type === 'image');

  function startFallingPolaroids() {
    if (polaroidInterval) return; // Already running
    
    function createFallingPolaroid() {
      const polaroid = document.createElement('div');
      polaroid.className = 'falling-polaroid';
      polaroid.dataset.emoji = getRandomEmoji();

      if (fallingImageItems.length > 0) {
        const randomItem = fallingImageItems[Math.floor(Math.random() * fallingImageItems.length)];
        const img = document.createElement('img');
        img.className = 'falling-polaroid-image';
        img.src = randomItem.data;
        img.alt = randomItem.caption || '';
        polaroid.appendChild(img);
      } else {
        polaroid.classList.add('no-image');
      }
      
      // Random horizontal position
      polaroid.style.left = Math.random() * 100 + '%';
      
      // Random size variation
      const scale = 0.6 + Math.random() * 0.8;
      polaroid.style.transform = `scale(${scale})`;
      
      // Random animation duration (slower is more elegant)
      const duration = 8 + Math.random() * 6;
      polaroid.style.animationDuration = duration + 's';
      
      // Random delay for staggered effect
      polaroid.style.animationDelay = Math.random() * 2 + 's';
      
      // Random initial rotation
      const rotation = -30 + Math.random() * 60;
      polaroid.style.setProperty('--initial-rotation', rotation + 'deg');
      
      fallingPolaroidsContainer.appendChild(polaroid);
      
      // Remove after animation completes
      setTimeout(() => {
        if (polaroid.parentNode) {
          polaroid.remove();
        }
      }, (duration + 2) * 1000);
    }
    
    // Create initial batch
    for (let i = 0; i < 5; i++) {
      setTimeout(createFallingPolaroid, i * 400);
    }
    
    // Continue creating polaroids
    polaroidInterval = setInterval(createFallingPolaroid, 1500);
  }

  function stopFallingPolaroids() {
    if (polaroidInterval) {
      clearInterval(polaroidInterval);
      polaroidInterval = null;
    }
  }

  // ===== HANDWRITING ANIMATION =====
  const handwritingEl = qs('#handwriting-text');
  const continueGalleryBtn = qs('#continue-to-gallery');

  function startHandwritingAnimation() {
    const message = CONFIG.message;
    let index = 0;
    handwritingEl.innerHTML = '<span class="pen"></span>';
    
    function writeChar() {
      if (index < message.length) {
        const char = message[index];
        const pen = handwritingEl.querySelector('.pen');
        
        // Create character span with ink animation
        const charSpan = document.createElement('span');
        charSpan.className = 'char';
        
        if (char === '\n') {
          // Line break
          const br = document.createElement('br');
          pen.parentNode.insertBefore(br, pen);
        } else if (char === ' ') {
          charSpan.classList.add('space');
          charSpan.innerHTML = '&nbsp;';
          pen.parentNode.insertBefore(charSpan, pen);
        } else {
          charSpan.textContent = char;
          pen.parentNode.insertBefore(charSpan, pen);
        }
        
        index++;
        
        // Variable writing speed - slower for more natural handwriting feel
        const delay = char === '\n' ? 400 : (char === ' ' ? 100 : 60 + Math.random() * 80);
        setTimeout(writeChar, delay);
      } else {
        // Done writing - remove pen, show continue button
        const pen = handwritingEl.querySelector('.pen');
        if (pen) pen.remove();
        continueGalleryBtn.style.display = 'block';
      }
    }
    
    // Start after paper animation
    setTimeout(writeChar, 1500);
  }

  continueGalleryBtn.addEventListener('click', () => {
    stopFallingPolaroids();
    showSection('gallery-section');
    renderGallery();
  });

  // ===== POLAROID GALLERY =====
  const galleryGrid = qs('#polaroid-gallery');
  const photoModal = qs('#photo-modal');
  const modalImageContainer = qs('#modal-image-container');
  let currentPhotoIndex = 0;

  function renderGallery() {
    galleryGrid.innerHTML = '';
    
    if (CONFIG.gallery.length === 0) {
      // Show placeholder
      const placeholder = document.createElement('div');
      placeholder.className = 'polaroid';
      placeholder.style.setProperty('--delay', '0');
      placeholder.style.setProperty('--rotation', '0');
      placeholder.innerHTML = `
        <div class="polaroid-image" style="display:flex;align-items:center;justify-content:center;color:#808080;font-size:14px;text-align:center;padding:20px;">
          Add photos to CONFIG.gallery in script.js
        </div>
        <div class="polaroid-caption">Your photo here</div>
      `;
      galleryGrid.appendChild(placeholder);
      return;
    }

    CONFIG.gallery.forEach((item, idx) => {
      const polaroid = document.createElement('div');
      polaroid.className = 'polaroid';
      polaroid.style.setProperty('--delay', idx.toString());
      polaroid.style.setProperty('--rotation', ((Math.random() * 6) - 3).toString());
      polaroid.dataset.emoji = getRandomEmoji();

      if (item.type === 'image') {
        const img = document.createElement('img');
        img.className = 'polaroid-image';
        img.src = item.data;
        img.alt = item.caption || '';
        polaroid.appendChild(img);
      } else if (item.type === 'video') {
        const vid = document.createElement('video');
        vid.className = 'polaroid-image';
        vid.src = item.data;
        vid.muted = true;
        polaroid.appendChild(vid);
      }

      const caption = document.createElement('div');
      caption.className = 'polaroid-caption';
      caption.textContent = item.caption || '';
      polaroid.appendChild(caption);

      polaroid.addEventListener('click', () => openPhotoModal(idx));
      galleryGrid.appendChild(polaroid);
    });
  }

  function openPhotoModal(index) {
    if (CONFIG.gallery.length === 0) return;
    
    currentPhotoIndex = index;
    const item = CONFIG.gallery[index];
    modalImageContainer.innerHTML = '';

    if (item.type === 'image') {
      const img = document.createElement('img');
      img.src = item.data;
      modalImageContainer.appendChild(img);
    } else {
      const vid = document.createElement('video');
      vid.src = item.data;
      vid.controls = true;
      modalImageContainer.appendChild(vid);
    }

    photoModal.setAttribute('aria-hidden', 'false');
  }

  function closePhotoModal() {
    photoModal.setAttribute('aria-hidden', 'true');
  }

  qs('.modal-close').addEventListener('click', closePhotoModal);
  
  qs('#modal-prev').addEventListener('click', () => {
    if (CONFIG.gallery.length > 0) {
      currentPhotoIndex = (currentPhotoIndex - 1 + CONFIG.gallery.length) % CONFIG.gallery.length;
      openPhotoModal(currentPhotoIndex);
    }
  });

  qs('#modal-next').addEventListener('click', () => {
    if (CONFIG.gallery.length > 0) {
      currentPhotoIndex = (currentPhotoIndex + 1) % CONFIG.gallery.length;
      openPhotoModal(currentPhotoIndex);
    }
  });

  photoModal.addEventListener('click', (e) => {
    if (e.target === photoModal) closePhotoModal();
  });

  // Continue to Valentine button
  qs('#continue-to-valentine').addEventListener('click', () => {
    showSection('valentine-section');
    createFloatingHearts();
  });

  // ===== FLOATING HEARTS =====
  function createFloatingHearts() {
    const container = qs('#floating-hearts');
    container.innerHTML = '';
    
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.textContent = '♥';
      heart.style.left = Math.random() * 100 + '%';
      heart.style.top = Math.random() * 100 + '%';
      heart.style.fontSize = (15 + Math.random() * 25) + 'px';
      heart.style.animationDelay = Math.random() * 4 + 's';
      heart.style.animationDuration = (3 + Math.random() * 3) + 's';
      heart.style.color = `hsl(${340 + Math.random() * 30}, 70%, ${50 + Math.random() * 20}%)`;
      container.appendChild(heart);
    }
  }

  // ===== VALENTINE BUTTONS =====
  const yesBtn = qs('#yes-btn');
  const noBtn = qs('#no-btn');
  const cardInner = qs('.valentine-card-inner');

  yesBtn.addEventListener('click', () => {
    cardInner.classList.add('flipped');
    createHeartBurst();
  });

  // Make "No" button run away
  let noClicks = 0;
  noBtn.addEventListener('mouseenter', () => {
    noClicks++;
    const maxMove = Math.min(noClicks * 30, 150);
    const randomX = (Math.random() - 0.5) * maxMove * 2;
    const randomY = (Math.random() - 0.5) * maxMove;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${Math.random() * 20 - 10}deg)`;
  });

  function createHeartBurst() {
    const burst = qs('#heart-burst');
    burst.innerHTML = '';
    
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement('div');
      heart.className = 'burst-heart';
      heart.textContent = '❤';
      const angle = (i / 20) * Math.PI * 2;
      const distance = 100 + Math.random() * 100;
      heart.style.setProperty('--tx', `${Math.cos(angle) * distance}px`);
      heart.style.setProperty('--ty', `${Math.sin(angle) * distance}px`);
      heart.style.animationDelay = `${Math.random() * 0.3}s`;
      burst.appendChild(heart);
    }
  }

  // ===== SPARKLES & RIBBONS =====
  const sparklesContainer = qs('#sparkles');
  const ribbonsContainer = qs('#ribbons');

  function createSparkles() {
    if (!sparklesContainer) return;
    
    function addSparkle() {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = Math.random() * 100 + '%';
      sparkle.style.top = Math.random() * 100 + '%';
      sparkle.style.animationDuration = (2 + Math.random() * 2) + 's';
      sparkle.style.animationDelay = Math.random() * 2 + 's';
      sparklesContainer.appendChild(sparkle);
      
      setTimeout(() => sparkle.remove(), 5000);
    }
    
    // Initial batch
    for (let i = 0; i < 15; i++) {
      setTimeout(addSparkle, i * 200);
    }
    
    // Continue adding
    setInterval(addSparkle, 400);
  }

  function createRibbons() {
    if (!ribbonsContainer) return;
    
    for (let i = 0; i < 8; i++) {
      const ribbon = document.createElement('div');
      ribbon.className = 'ribbon';
      ribbon.style.left = Math.random() * 100 + '%';
      ribbon.style.top = Math.random() * 100 + '%';
      ribbon.style.width = (60 + Math.random() * 80) + 'px';
      ribbon.style.animationDuration = (5 + Math.random() * 4) + 's';
      ribbon.style.animationDelay = Math.random() * 3 + 's';
      ribbon.style.opacity = 0.3 + Math.random() * 0.4;
      ribbonsContainer.appendChild(ribbon);
    }
  }

  // ===== INITIALIZE =====
  showSection('maze-section');
  createSparkles();
  createRibbons();
})();
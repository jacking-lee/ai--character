// animeVirtualCharacter.js

// 虚拟角色选择
const characterCards = document.querySelectorAll('.character-card');
characterCards.forEach(card => {
  card.addEventListener('click', () => {
    console.log(`选择了角色: ${card.querySelector('p').textContent}`);
    // 这里可以调用角色的详细展示页面
  });
});

// 角色定制功能
const customizeButtons = document.querySelectorAll('.customize-button');
customizeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const characterName = button.parentNode.querySelector('p').textContent;
    console.log(`开始定制角色: ${characterName}`);
    // 这里调用角色定制的界面逻辑
    document.getElementById('character-customization').scrollIntoView();
  });
});

// 角色定制参数
const characterVoiceSelect = document.getElementById('character-voice');
characterVoiceSelect.addEventListener('change', (event) => {
  console.log(`选择了声音风格: ${event.target.value}`);
});

const characterOutfitSelect = document.getElementById('character-outfit');
characterOutfitSelect.addEventListener('change', (event) => {
  console.log(`选择了服装风格: ${event.target.value}`);
});

// 产品定制功能
const productTypeSelect = document.getElementById('product-type');
productTypeSelect.addEventListener('change', (event) => {
  console.log(`选择了产品类型: ${event.target.value}`);
});

const productSizeInput = document.getElementById('product-size');
productSizeInput.addEventListener('input', (event) => {
  console.log(`输入的产品尺寸: ${event.target.value}`);
});

// 数字互动与视频生成
const createVideoButton = document.getElementById('create-video');
createVideoButton.addEventListener('click', () => {
  console.log('生成互动视频');
  // 这里调用生成视频的相关接口或功能
});

const startInteractionButton = document.getElementById('start-interaction');
startInteractionButton.addEventListener('click', () => {
  console.log('开始数字互动');
  // 这里调用开始互动的相关逻辑
});

// 生成二维码与分享
const generateQrButton = document.getElementById('generate-qr');
generateQrButton.addEventListener('click', () => {
  console.log('生成二维码');
  // 这里调用二维码生成的逻辑，展示在 qr-code 区域
  document.getElementById('qr-code').textContent = '二维码生成成功';
});

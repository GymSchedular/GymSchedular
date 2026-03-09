/* ========================================
   GymSchedular - AI Chatbot Component
   ======================================== */

const ChatBot = (() => {
  let isOpen = false;

  const responses = {
    'workout plan': `Here's a suggested weekly plan:\n\n**Mon** – Power Yoga (60 min)\n**Tue** – HIIT Blast (45 min)\n**Wed** – Rest / light stretching\n**Thu** – Boxing Basics (60 min)\n**Fri** – Core Pilates (50 min)\n**Sat** – Strength Training (55 min)\n**Sun** – Rest\n\nWant me to book any of these?`,
    'nutrition tips': `Great question! Here are some tips:\n\n• **Pre-workout** – Banana + oats 30 min before\n• **Post-workout** – Protein shake within 30 min\n• **Hydration** – Aim for 3-4L of water daily\n• **Meals** – Lean protein + complex carbs + veggies\n\nNeed a detailed meal plan? Just ask!`,
    'recovery': `Recovery is key to progress 💪\n\n• **Sleep** – 7-9 hours per night\n• **Stretching** – 10 min post-workout\n• **Foam rolling** – Focus on tight areas\n• **Active rest** – Light walks on off days\n• **Nutrition** – Anti-inflammatory foods help\n\nWant recovery exercises for a specific area?`,
    'heart rate zones': `Your heart rate training zones:\n\n🟢 **Zone 1 (50-60%)** – Warm-up / Recovery\n🔵 **Zone 2 (60-70%)** – Fat burn / Endurance\n🟡 **Zone 3 (70-80%)** – Aerobic / Cardio\n🟠 **Zone 4 (80-90%)** – Threshold / Speed\n🔴 **Zone 5 (90-100%)** – Max effort / Sprint\n\nMost classes target Zones 2-4.`,
    'default': `I can help with workout plans, nutrition tips, recovery advice, and heart rate training zones. Just ask or tap a quick action below!`
  };

  function getResponse(input) {
    const lower = input.toLowerCase();
    for (const [key, val] of Object.entries(responses)) {
      if (key !== 'default' && lower.includes(key)) return val;
    }
    if (lower.includes('book') || lower.includes('class')) {
      return `You can book a class from the **Book a Class** page in the sidebar. We have Yoga, HIIT, Pilates, Boxing, Strength & Cardio classes available!`;
    }
    if (lower.includes('schedule') || lower.includes('time')) {
      return `Check the **Schedule** page for today's lineup, or head to **Book a Class** to pick your preferred time slot.`;
    }
    if (lower.includes('instructor') || lower.includes('trainer')) {
      return `We have amazing instructors! Visit the **Instructors** page to see their profiles, specialties, and ratings.`;
    }
    if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
      return `Hey there! 👋 How can I help you today? I can assist with workout plans, nutrition, recovery tips, or booking classes.`;
    }
    return responses['default'];
  }

  function formatMessage(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  }

  function render() {
    return `
      <button class="chatbot-fab" id="chatbotFab" onclick="ChatBot.toggle()" title="AI Fitness Assistant">
        ${Icons.dumbbell}
      </button>
      <div class="chatbot-panel" id="chatbotPanel">
        <div class="chatbot-header">
          <div class="chatbot-avatar">${Icons.dumbbell}</div>
          <div class="chatbot-header-info">
            <h4>AI Fitness Assistant</h4>
            <span>Online</span>
          </div>
          <button class="chatbot-close" onclick="ChatBot.toggle()">${Icons.close}</button>
        </div>
        <div class="chatbot-messages" id="chatbotMessages">
          <div class="chat-msg bot">Hey ${UserManager.getCurrentUser()?.name?.split(' ')[0] || 'there'}! 👋 I'm your AI fitness assistant. How can I help you today?</div>
        </div>
        <div class="chatbot-quick-actions" id="chatbotQuickActions">
          <button class="quick-action-btn" onclick="ChatBot.sendQuick('Workout Plan')">💪 Workout Plan</button>
          <button class="quick-action-btn" onclick="ChatBot.sendQuick('Nutrition Tips')">🥗 Nutrition Tips</button>
          <button class="quick-action-btn" onclick="ChatBot.sendQuick('Recovery')">🧘 Recovery</button>
          <button class="quick-action-btn" onclick="ChatBot.sendQuick('Heart Rate Zones')">❤️ Heart Rate Zones</button>
        </div>
        <div class="chatbot-input">
          <input type="text" id="chatbotInput" placeholder="Ask about workouts, nutrition..." onkeydown="if(event.key==='Enter')ChatBot.send()">
          <button class="chatbot-send" onclick="ChatBot.send()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </div>
      </div>
    `;
  }

  function toggle() {
    isOpen = !isOpen;
    const panel = document.getElementById('chatbotPanel');
    const fab = document.getElementById('chatbotFab');
    if (panel) panel.classList.toggle('visible', isOpen);
    if (fab) fab.classList.toggle('open', isOpen);
  }

  function addMessage(text, sender) {
    const container = document.getElementById('chatbotMessages');
    if (!container) return;
    const div = document.createElement('div');
    div.className = `chat-msg ${sender}`;
    div.innerHTML = sender === 'bot' ? formatMessage(text) : text;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  }

  function showTyping() {
    const container = document.getElementById('chatbotMessages');
    if (!container) return;
    const div = document.createElement('div');
    div.className = 'chat-msg bot typing';
    div.id = 'chatTyping';
    div.innerHTML = '<span></span><span></span><span></span>';
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  }

  function removeTyping() {
    const el = document.getElementById('chatTyping');
    if (el) el.remove();
  }

  function send() {
    const input = document.getElementById('chatbotInput');
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, 'user');
    input.value = '';

    // Hide quick actions after first message
    const qa = document.getElementById('chatbotQuickActions');
    if (qa) qa.style.display = 'none';

    showTyping();
    setTimeout(() => {
      removeTyping();
      addMessage(getResponse(text), 'bot');
    }, 800 + Math.random() * 600);
  }

  function sendQuick(topic) {
    const input = document.getElementById('chatbotInput');
    if (input) input.value = topic;
    send();
  }

  function init() {
    const wrapper = document.createElement('div');
    wrapper.id = 'chatbotWrapper';
    wrapper.innerHTML = render();
    document.body.appendChild(wrapper);
  }

  return { toggle, send, sendQuick, init };
})();

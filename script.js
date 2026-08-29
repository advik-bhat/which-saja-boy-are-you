const audio = document.getElementById('bg-audio');
    const musicIcon = document.getElementById('musicIcon');
    const musicText = document.getElementById('musicText');

    function toggleMusic() {
      if (audio.paused) {
        audio.play();
        musicIcon.textContent = "🎶";
        musicText.textContent = "Pause Music";
      } else {
        audio.pause();
        musicIcon.textContent = "🎵";
        musicText.textContent = "Play Music";
      }
    }

    const memberBios = {
      Jinu: {
        name: "Jinu 🎤",
        img: "jinu1.jpg",
        bio: "The cool leader of the group! He’s confident, talented, and always ready to put on a great show. Basically, the guy who says “I’ve got this!” 😎"
      },
      Abby: {
        name: "Abby 💪",
        img: "abby1.jpg",
        bio: "The strong one! He looks like he could carry all the group’s luggage at once. 😂 Strong muscles, big idol energy!"
      },
      Mystery: {
        name: "Mystery 🌫️",
        img: "mystery1.webp",
        bio: "The quiet and mysterious member. You never quite know what he’s thinking! He’s basically the group’s walking question mark. 🤔"
      },
      Romance: {
        name: "Romance 💕",
        img: "pinkhair.jpg",
        bio: "The cheerful, charming member who loves making everyone smile. He brings lots of fun and happy energy wherever he goes! ✨"
      },
      Baby: {
        name: "Baby 🐣",
        img: "baby.jpg",
        bio: "The adorable youngest member! He has tons of playful energy and can make the whole group laugh. The official little troublemaker! 😂"
      }
    };

    const questions = [
      {
        question: "1. What is your go-to role during a big performance?",
        options: [
          { text: "Flexing intense strength and high-powered visuals.", member: "Abby" },
          { text: "Winning everyone's heart with cute aegyo and vocals.", member: "Baby" },
          { text: "Leading the group calmly and keeping beat precision.", member: "Jinu" },
          { text: "Staying in the shadow until dropping an iconic solo moment.", member: "Mystery" },
          { text: "Blinking at the camera with unbeatable romantic charisma.", member: "Romance" }
        ]
      },
      {
        question: "2. A wild demon suddenly crashes the concert! How do you react?",
        options: [
          { text: "Charge straight ahead and use pure physical power!", member: "Abby" },
          { text: "Stay close to the team and use cute tactics to distract it.", member: "Baby" },
          { text: "Stay calm, assess the situation, and give tactical orders.", member: "Jinu" },
          { text: "Use mysterious aura and stealthy speed to neutralize it.", member: "Mystery" },
          { text: "Charm the audience to stay calm while handling it with style.", member: "Romance" }
        ]
      },
      {
        question: "3. What fashion piece best defines your everyday style?",
        options: [
          { text: "Sleeveless muscle shirts & bold tropical prints.", member: "Abby" },
          { text: "Pastel sweaters & bright yellow berets.", member: "Baby" },
          { text: "Clean grid button-ups & sleek classic aesthetic.", member: "Jinu" },
          { text: "Oversized cozy knits with bang-covered hair.", member: "Mystery" },
          { text: "Vibrant yellow jackets & stylish pearl necklaces.", member: "Romance" }
        ]
      },
      {
        question: "4. How do you handle stressful situations behind the scenes?",
        options: [
          { text: "Hit the workout room to blow off some steam.", member: "Abby" },
          { text: "Eat sweet snacks and look for hugs or encouragement.", member: "Baby" },
          { text: "Keep a steady poker face and resolve the issue head-on.", member: "Jinu" },
          { text: "Put on headphones and hide away in your own space.", member: "Mystery" },
          { text: "Smile, flirt through the tension, and keep spirits high.", member: "Romance" }
        ]
      },
      {
        question: "5. What's your secret superpower on stage?",
        options: [
          { text: "Unmatched physical endurance and dominant presence.", member: "Abby" },
          { text: "Irresistible cuteness that makes fans melt.", member: "Baby" },
          { text: "Flawless focus and natural leadership magnetism.", member: "Jinu" },
          { text: "An enigmatic mystery that leaves everyone wanting more.", member: "Mystery" },
          { text: "Captivating eye contact and romantic charm.", member: "Romance" }
        ]
      },
      {
        question: "6. Pick your ideal afternoon hangout place:",
        options: [
          { text: "Outdoor sports arena or workout park.", member: "Abby" },
          { text: "A cute pastel cafe with boba and pastries.", member: "Baby" },
          { text: "A high-end quiet lounge or study room.", member: "Jinu" },
          { text: "A retro record store or hidden rooftop.", member: "Mystery" },
          { text: "A fancy restaurant with good lighting.", member: "Romance" }
        ]
      },
      {
        question: "7. How do your friends usually describe you?",
        options: [
          { text: "Strong, confident, and protective.", member: "Abby" },
          { text: "Adorable, playful, and sweet.", member: "Baby" },
          { text: "Cool, composed, and dependable.", member: "Jinu" },
          { text: "Quiet, deep, and intriguing.", member: "Mystery" },
          { text: "Charming, handsome, and dramatic.", member: "Romance" }
        ]
      },
      {
        question: "8. What is your preferred way to greet your fans?",
        options: [
          { text: "Crossing arms confidently with a bold smirk.", member: "Abby" },
          { text: "Doing heart cheeks and waving enthusiastically.", member: "Baby" },
          { text: "A respectful, calm smile and nod.", member: "Jinu" },
          { text: "A subtle tilt of the head behind soft pastel hair.", member: "Mystery" },
          { text: "Reaching out a hand like a classic prince.", member: "Romance" }
        ]
      },
      {
        question: "9. When making an important group decision, you tend to:",
        options: [
          { text: "Push for the boldest, most energetic path.", member: "Abby" },
          { text: "Vote for whatever keeps everyone happy!", member: "Baby" },
          { text: "Take charge and make the final logical call.", member: "Jinu" },
          { text: "Observe quietly and state your opinion in key moments.", member: "Mystery" },
          { text: "Persuade everyone with smooth charisma.", member: "Romance" }
        ]
      },
      {
        question: "10. What's your main goal in the Saja Boys?",
        options: [
          { text: "To be the strongest and most imposing force on stage.", member: "Abby" },
          { text: "To bring pure joy and sweetness to all fans.", member: "Baby" },
          { text: "To guide the team to worldwide success.", member: "Jinu" },
          { text: "To express unique art without revealing all your secrets.", member: "Mystery" },
          { text: "To make every single fan fall in love with you.", member: "Romance" }
        ]
      }
    ];

    let currentStep = 0;
    let scores = { Abby: 0, Baby: 0, Jinu: 0, Mystery: 0, Romance: 0 };

    function showMemberDetails(memberName) {
      const data = memberBios[memberName];
      document.getElementById('progressBarBox').style.display = 'none';
      document.getElementById('popupModal').style.display = 'flex';
      
      let html = `
        <h2 style="font-family:'Fredoka',cursive; color: var(--pink-accent); font-size: 2.2rem;">${data.name}</h2>
        <img src="${data.img}" class="modal-img" alt="${data.name}" onerror="this.src='https://via.placeholder.com/170/ffb7c5/5c434a?text=${memberName}'">
        <p style="font-size: 1.15rem; font-weight: 700; color: var(--text-dark); line-height: 1.6; padding: 0 10px;">${data.bio}</p>
      `;

      document.getElementById('modalContent').innerHTML = html;
    }

    function startQuiz() {
      currentStep = 0;
      scores = { Abby: 0, Baby: 0, Jinu: 0, Mystery: 0, Romance: 0 };
      document.getElementById('progressBarBox').style.display = 'block';
      document.getElementById('popupModal').style.display = 'flex';
      showQuestion();
    }

    function closeModal() {
      document.getElementById('popupModal').style.display = 'none';
    }

    function showQuestion() {
      const q = questions[currentStep];
      const progressPercent = ((currentStep) / questions.length) * 100;
      document.getElementById('progressBar').style.width = `${progressPercent}%`;

      let html = `<h2 style="font-family:'Fredoka',cursive; margin-bottom: 15px; color: var(--pink-accent);">Question ${currentStep + 1} of 10</h2>`;
      html += `<p style="font-size: 1.15rem; font-weight:800; margin-bottom: 20px;">${q.question}</p>`;
      
      q.options.forEach(opt => {
        html += `<button class="option-btn" onclick="selectOption('${opt.member}')">${opt.text}</button>`;
      });

      document.getElementById('modalContent').innerHTML = html;
    }

    function selectOption(member) {
      scores[member]++;
      currentStep++;
      if (currentStep < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    }

    function showResult() {
      document.getElementById('progressBar').style.width = `100%`;
      let topMember = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
      const data = memberBios[topMember];

      let html = `
        <h2 style="font-family:'Fredoka',cursive; color: var(--pink-accent); font-size: 2.2rem;">You matched with ${data.name}!</h2>
        <img src="${data.img}" class="modal-img" alt="${topMember}" onerror="this.src='https://via.placeholder.com/170/ffb7c5/5c434a?text=${topMember}'">
        <p style="font-size: 1.1rem; font-weight: 700; color: var(--text-dark); margin-bottom: 25px;">${data.bio}</p>
        <button class="quiz-btn" onclick="startQuiz()">Retake Quiz 🔄</button>
      `;

      document.getElementById('modalContent').innerHTML = html;
    }
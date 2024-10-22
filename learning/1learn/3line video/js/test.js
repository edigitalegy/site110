const quizData = [
  {
    question: "عزيزي الطالب لكي تقوم مع اخيك بأنشاء بيت ذكي ماذا عليك ان تفعل؟",
    options: ["تقوم بطلب جهاز استشعار لكي تجمع البيانات وتظهرها على شاشة يمكن قراءتها ", "أم تقوم بطلب تقنية الذكاء الاصطناعي التي تعمل علي برمجة الحاسوب وتتطلب منة القيام بعمل يحاكي عمل البشر.", "أم تقوم بطلب تقنية انترنت الأشياء التي تعمل على ربط الأجهزة بعظها ببعض والتحكم بها عن بعد "],
    answer: "أم تقوم بطلب تقنية انترنت الأشياء التي تعمل على ربط الأجهزة بعظها ببعض والتحكم بها عن بعد ",
    feedback: "."
  },
  {
    question: "'بعد ان قمت عزيزي الطالب بأنشاء البيت الذكي كنت خارج المنزل ووصلك رسالة ان إضاءة المنزل تعمل بكامل طاقتها فماذا يجب عليك استخدامه للتحكم بها ؟",
    options: ["Bluetooth", "Net work", "WIFI"],
    answer: "Net work",
    feedback: "."
  },
  {
    question: "عزيزي الطالب اذا وجد عطل في ثلاجتك الذكية فبإمكان الثلاجة معرفة هذا العطل ومخاطبة شركة الصيانة لإصلاحه يتم ذلك عن طريق؟",
    options: ["تقنية أجهزة الاستشعار التي تستقبل مجموعة بيانات وتظهرها علي الشاشة  ", "تقنية الحوسبة التي تعمل على جمع البيانات وتخزينها ", "أجهزة الاتصال التي تعمل علي توصيل الأجهزة بعضها ببعض"],
    answer: "تقنية أجهزة الاستشعار التي تستقبل مجموعة بيانات وتظهرها علي الشاشة  ",
    feedback: "."
  },
  {
    question: "عزيزي الطالب اذا أراد احد اصدقائك تخزين كم هائل من البيانات الخاصة بية لانه يخاف ان يفقد هذه البيانات اذا حدث تلف في حاسوبه الخاص بة فسوف تنصحة بتخزينها في؟",
    options: ["تقنية أجهزة الاستشعار التي تستقبل مجموعة بيانات وتظهرها علي الشاشة", "تقنية الخدمة الحاسوبية  التي تحتوي علي مجموعة خوادم عبر الأنترانت وتعمل علي مدار 24 ساعة", "بوابة Gaet way  التي تعمل علي اتصال الأجهزة   بالانترنت"],
    answer: "تقنية الخدمة الحاسوبية  التي تحتوي علي مجموعة خوادم عبر الأنترانت وتعمل علي مدار 24 ساعة",
    feedback: "."
  }
];
  
  let currentQuestionIndex = 0; // Track the current question
  let userAnswers = []; // Store user answers for review
  let correctAnswersCount = 0; // Count correct answers
  
  function loadQuiz() {
    shuffle(quizData);
    displayQuestion();
  }
  
  function displayQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';
  
    const item = quizData[currentQuestionIndex];
    const questionCard = document.createElement('div');
    questionCard.classList.add('mb-3');
  
    const questionTitle = document.createElement('h5');
    questionTitle.textContent = `س${currentQuestionIndex + 1}: ${item.question}`;
    questionCard.appendChild(questionTitle);
  
    shuffle(item.options); // Shuffle the options
  
    item.options.forEach((option) => {
      const optionLabel = document.createElement('label');
      optionLabel.classList.add('form-check-label');
  
      const optionInput = document.createElement('input');
      optionInput.classList.add('form-check-input');
      optionInput.setAttribute('type', 'radio');
      optionInput.setAttribute('name', 'question');
      optionInput.setAttribute('value', option);
      optionInput.onclick = () => handleAnswer(option); // Handle answer selection
  
      // Append input after the label text
      optionLabel.append(`${option} `); // Append the option text
      optionLabel.appendChild(optionInput); // Append the radio button
      const optionWrapper = document.createElement('div');
      optionWrapper.classList.add('form-check');
      optionWrapper.appendChild(optionLabel);
      questionCard.appendChild(optionWrapper);
    });
  
    quizContainer.appendChild(questionCard);
  
    // Update button text based on the current question
    document.getElementById('next-btn').textContent = currentQuestionIndex === quizData.length - 1 ? "إرسال" : "التالي";
  }
  
  function handleAnswer(selectedValue) {
    const item = quizData[currentQuestionIndex];
    userAnswers[currentQuestionIndex] = selectedValue; // Store user's answer
  
    // Highlight selected answer
    const selectedInput = document.querySelector('input[name="question"]:checked');
    const feedbackContainer = document.createElement('div');
    feedbackContainer.classList.add('feedback', 'alert');
  
    if (selectedValue === item.answer) {
      correctAnswersCount++; // Increment correct answers
      selectedInput.parentElement.classList.add('correct-answer');
      selectedInput.parentElement.innerHTML += '<span class="icon check-icon">✔</span>'; // Add check icon
      feedbackContainer.textContent = "صحيح! " + item.feedback; // Show feedback
      feedbackContainer.classList.add('alert-success');
    } else {
      selectedInput.parentElement.classList.add('wrong-answer');
      selectedInput.parentElement.innerHTML += '<span class="icon cross-icon">✘</span>'; // Add cross icon
      feedbackContainer.textContent = "خطأ! " + item.feedback; // Show feedback
      feedbackContainer.classList.add('alert-danger');
      const correctOption = [...document.getElementsByName('question')].find(input => input.value === item.answer);
      correctOption.parentElement.classList.add('correct-answer'); // Highlight correct option
      correctOption.parentElement.innerHTML += '<span class="icon check-icon">✔</span>'; // Add check icon
    }
  
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.appendChild(feedbackContainer);
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      displayQuestion();
    } else {
      document.getElementById('next-btn').classList.add('hidden'); // Hide the next button
      document.getElementById('review-btn').classList.remove('hidden'); // Show review button
      showResults();
    }
  }
  
  function showResults() {
    const resultContainer = document.getElementById('result');
    resultContainer.classList.remove('hidden');
    resultContainer.innerHTML = `لقد أجبت بشكل صحيح على ${correctAnswersCount} من ${quizData.length} أسئلة.`;
    giveRecommendations(correctAnswersCount);
  }
  
  function giveRecommendations(correctCount) {
    const recommendationsContainer = document.getElementById('recommendations');
    recommendationsContainer.innerHTML = ''; // Clear previous recommendations
  
    let recommendations;
    if (correctCount === quizData.length) {
      recommendations = "أحسنت! استمر في المذاكرة بشكل جيد.";
    } else if (correctCount >= quizData.length / 2) {
      recommendations = "جيد، لكن يمكنك تحسين أدائك. حاول مراجعة المواد التي لم تجب عليها بشكل صحيح.";
    } else {
      recommendations = "يبدو أنك بحاجة إلى مزيد من الممارسة. حاول التركيز على الموضوعات التي لم تفهمها جيدًا.";
    }
  
    const recommendationText = document.createElement('p');
    recommendationText.textContent = recommendations;
    recommendationsContainer.appendChild(recommendationText);
  }
  
  function reviewQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';
  
    quizData.forEach((item, index) => {
      const reviewCard = document.createElement('div');
      reviewCard.classList.add('mb-3');
  
      const questionTitle = document.createElement('h5');
      questionTitle.textContent = `س${index + 1}: ${item.question}`;
      reviewCard.appendChild(questionTitle);
  
      const userAnswer = userAnswers[index] || "لم يتم اختيار إجابة"; // Get user's answer
      const resultText = document.createElement('p');
      resultText.classList.add(userAnswer === item.answer ? 'correct-answer' : 'wrong-answer');
      resultText.innerHTML = `إجابتك: <strong>${userAnswer}</strong>`;
      reviewCard.appendChild(resultText);
  
      const correctText = document.createElement('p');
      correctText.innerHTML = `الإجابة الصحيحة: <strong>${item.answer}</strong>`;
      correctText.classList.add('correct-answer');
      reviewCard.appendChild(correctText);
  
      quizContainer.appendChild(reviewCard);
    });
  
    // Hide the review button after reviewing
    document.getElementById('review-btn').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden'); // Hide the next button during review
  }
  
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  window.onload = loadQuiz;  
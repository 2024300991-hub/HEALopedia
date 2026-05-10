const healthCommonSymptoms = [
  {
    name: "Acute Abdominal Pain",
    definition: "Sudden, severe abdominal pain.",
    information: "In people with acute abdominal pain, certain symptoms and characteristics are cause for concern. They include:\n• Severe pain\n• Signs of shock (e.g., rapid heart rate, low blood pressure, sweating, and confusion)\n• Signs of peritonitis (e.g., constant pain that doubles the person over and/or pain that worsens with gentle touching, with movement, or with bumping the bed)\n• Swelling of the abdomen",
    image: "../assets/symptoms/acute-abdominal-pain.png"
  },
 {
    name: "Back pain",
    definition: "A problem in any part of the spine",
    information: "Back pain often occurs when something is misaligned or malfunctioning within your spine's structure, specifically involving:\n• Spinal joints\n• Muscles\n• Discs\n• Nerves",
    image: "../assets/symptoms/back-pain.png"
  },
  {
    name: "Blurred vision",
    definition: "Happens when you can’t see things clearly. It means your vision isn’t sharp and crisp.",
    information: "It can be a sign of an injury or another serious condition if you develop blurred vision suddenly. Examples include:\n• Bleeding in your eye\n• Concussions\n• Detached retinas\n• Eye injuries\n• Migraines\n• Strokes or a transient ischemic attack (TIA)\n• Sudden high blood pressure",
    image: "../assets/symptoms/blurred-vision.png"
  },
  {
    name: "Chest pain",
    definition: "A pain or discomfort in any area of your chest.",
    information: "Chest pain symptoms related to your heart feel like pressure, squeezing, crushing, tearing, or fullness. You also may feel:\n• Tired and short of breath\n• Discomfort in your belly, shoulders, arms, jaw, neck and back\n• Sick to your stomach\n• Sweaty and light-headed",
    image: "../assets/symptoms/chest-pain.png"
  },
  {
    name: "Chills",
    definition: "Chills are a sign that your body is trying to regulate its core temperature.",
    information: "When you have chills, you may:\n• Shiver or tremble\n• Shake\n• Have chattering teeth\n• Have goosebumps (also known as gooseflesh or goose pimples)",
    image: "../assets/symptoms/chills.png"
  },
  {
    name: "Constipation",
    definition: "Occurs when your bowel movements become less frequent and stools become difficult to pass.",
    information: "Constipation symptoms include:\n• Fewer than three bowel movements a week\n• Stools are dry, hard and/or lumpy\n• Stools are difficult or painful to pass\n• Stomachache, cramps, or feeling bloated and nauseated",
    image: "../assets/symptoms/constipation.png"
  },
  {
    name: "Cough",
    definition: "A forceful push of air used to clear irritants, mucus and germs.",
    information: "Common causes include:\n• Allergies and asthma\n• Infections (like colds)\n• Chronic lung conditions\n• Acid reflux",
    image: "../assets/symptoms/cough.png"
  },
  {
    name: "Diarrhea",
    definition: "Having a loose, watery stool during a bowel movement.",
    information: "The main sign is loose or watery stool. Other common symptoms include:\n• Bloating or cramps in your belly\n• A strong and urgent need to poop\n• Nausea (upset stomach)",
    image: "../assets/symptoms/diarrhea.png"
  },
  {
    name: "Dizziness",
    definition: "Having impaired or disturbed spatial orientation.",
    information: "People experience dizziness in different ways, including:\n• Feeling faint or nauseous\n• Feeling unsteady on their feet\n• Loss of sense of balance\n• Feeling disoriented or confused",
    image: "../assets/symptoms/dizziness.png"
  },
  {
    name: "Ear pain",
    definition: "Otalgia; a symptom of many health conditions.",
    information: "Many things can make your ears hurt. Healthcare providers place ear pain in two categories:\n• Primary ear pain: originates in your ears.\n• Secondary (referred) ear pain: when a condition unrelated to your ears causes ear pain.",
    image: "../assets/symptoms/ear-pain.png"
  },
  {
    name: "Fatigue",
    definition: "Extreme tiredness.",
    information: "Fatigue symptoms include:\n• Tired eyes and tired legs\n• Whole body tiredness\n• Stiff shoulders\n• Malaise (discomfort/uneasiness)\n• Boredom and impatience",
    image: "../assets/symptoms/fatigue.png"
  },
  {
    name: "Fever",
    definition: "When your body temperature rises higher than normal.",
    information: "In addition to elevated temperature, you may experience:\n• Chills, feeling cold, shivering and shaking\n• Body aches and headaches\n• Fatigue (tiredness)\n• On and off or constant sweating\n• Flushed complexion or hot skin\n• Faster heart beats",
    image: "../assets/symptoms/fever.png"
  },
  {
    name: "Headache",
    definition: "A pain in your head or face (throbbing, constant, sharp or dull).",
    information: "There are more than 150 types of headaches falling into two main categories:\n• Primary headaches: Tension-type, Migraine, Cluster, and NDPH.\n• Secondary headaches: Dehydration, Sinus, and Medication overuse headaches.",
    image: "../assets/symptoms/headache.png"
  },
  {
    name: "Insomnia",
    definition: "A sleep disorder that makes it hard to fall asleep or stay asleep.",
    information: "Insomnia has several potential symptoms, including:\n• Trouble falling asleep\n• Waking up in the middle of the night\n• Feeling tired, unwell or sleepy during the day\n• Memory issues, slowed thinking, or trouble concentrating\n• Mood changes like anxiety and irritability",
    image: "../assets/symptoms/insomnia.png"
  },
  {
    name: "Itching",
    definition: "An irritating sensation that makes you want to scratch your skin.",
    information: "Some common causes are:\n• Allergic reactions (food, insect bites, pollen, medicines)\n• Skin conditions (eczema, psoriasis, dry skin)\n• Parasites (pinworms, scabies, lice)\n• Liver, kidney, or thyroid diseases",
    image: "../assets/symptoms/itching.png"
  },
  {
    name: "Joint pain",
    definition: "Discomfort that affects one or more joints in your body.",
    information: "The most common causes include:\n• Osteoarthritis: protective cushion between bones wears away.\n• Rheumatoid arthritis (RA): chronic disease causing swelling.\n• Gout: acidic crystals collect in the joint.\n• Bursitis or Tendinitis: typically caused by overuse.",
    image: "../assets/symptoms/joint-pain.png"
  },
  {
    name: "Loss of appetite",
    definition: "Occurs when you don’t feel hungry (Anorexia).",
    information: "There are several possible causes:\n• Physical changes to your body\n• Emotional changes to your mental health\n• Underlying health conditions\n• A side effect of a medication",
    image: "../assets/symptoms/loss-appetite.png"
  },
  {
    name: "Muscle aches",
    definition: "Myalgia; muscle pain which has many causes.",
    information: "Some of the main types of causes include:\n• Muscle stress from overuse\n• Traumatic injuries (sports injuries and accidents)\n• Viral and bacterial infections\n• Chronic pain syndromes (fibromyalgia)",
    image: "../assets/symptoms/muscle-aches.png"
  },
  {
    name: "Nasal Congestion",
    definition: "Inflammation, swelling and mucus production in the nose.",
    information: "If your nose is congested, you may:\n• Have trouble breathing through your nose\n• Have mucus flowing (runny nose)\n• Start breathing through your mouth",
    image: "../assets/symptoms/nasal-congestion.png"
  },
  {
    name: "Nausea",
    definition: "Feeling like your stomach is ready to expel its contents.",
    information: "Common causes of nausea include:\n• Motion sickness or vertigo\n• Migraines\n• Pregnancy (morning sickness)\n• Severe pain (like appendicitis)\n• Stress and anxiety",
    image: "../assets/symptoms/nausea.png"
  },
  {
    name: "Palpitations",
    definition: "Awareness of heartbeats (pounding, fluttering, racing).",
    information: "Ordinarily people do not notice their heartbeat. Causes of rapid, forceful beats include:\n• Exercise and strong emotions (anxiety, fear)\n• Anemia, fever, or dehydration\n• Disturbance of heart rhythm (arrhythmia)",
    image: "../assets/symptoms/palpitation.png"
  },
  {
    name: "Rash",
    definition: "Marks or lesions on the skin.",
    information: "There are many causes of rashes, including:\n• Infections such as STIs\n• Allergic reactions or immune system problems\n• Reactions to medicines",
    image: "../assets/symptoms/rash.png"
  },
  {
    name: "Runny nose",
    definition: "Rhinorrhea; most often due to allergies and viral infections.",
    information: "Rhinorrhea often happens alongside:\n• Nasal congestion\n• Sneezing\n• Postnasal drip (mucus dripping down the throat)",
    image: "../assets/symptoms/runny-nose.png"
  },
  {
    name: "Shortness of breath",
    definition: "Dyspnea; the feeling that you can’t get enough air.",
    information: "Signs of dyspnea include:\n• Chest tightness\n• Feeling like you need to force yourself to breathe deeply\n• Rapid breathing (tachypnea)\n• Wheezing or stridor (noisy breathing)",
    image: "../assets/symptoms/shortness-breath.png"
  },
  {
    name: "Sneezing",
    definition: "Involuntary burst of air to clear nose/throat irritants.",
    information: "Many things can cause sneezing, including:\n• Allergies (dust, mold, pollen)\n• Viral infections (flu, common cold)\n• Breathing in certain medications in nasal sprays\n• Eating spicy foods",
    image: "../assets/symptoms/sneezing.png"
  },
  {
    name: "Sore throat",
    definition: "Pharyngitis; scratchy or burning feeling in the throat.",
    information: "A sore throat may be a sign of:\n• Bacterial infection (Strep throat) or Tonsillitis\n• Allergies (postnasal drip)\n• Acid reflux (GERD)\n• Overuse or irritants (yelling, smoking, spicy food)",
    image: "../assets/symptoms/sore-throat.png"
  },
  {
    name: "Sweating",
    definition: "Perspiration; release of liquid from sweat glands.",
    information: "Causes may include:\n• Alcohol, caffeine, or spicy foods\n• Exercise and warm temperatures\n• Fever, infection, or menopause\n• Low blood sugar or withdrawal from certain medicines",
    image: "../assets/symptoms/sweating.png"
  },
  {
    name: "Swelling",
    definition: "Edema; fluid trapped in your body’s tissues.",
    information: "Edema’s effects can include:\n• Body parts look puffy, enlarged or swollen\n• Skin that looks shiny, stretched or feels tight\n• Discomfort, soreness, or weight gain from trapped fluid",
    image: "../assets/symptoms/swelling.png"
  },
  {
    name: "Vomiting",
    definition: "Forceful expulsion of stomach contents.",
    information: "Vomiting can happen for many reasons:\n• Indigestion or head injuries (concussions)\n• Infectious diseases (Salmonella)\n• Motion sickness or pregnancy\n• Psychological reasons (anxiety)",
    image: "../assets/symptoms/vomiting.png"
  },
  {
    name: "Weakness (Asthenia)",
    definition: "Lack of physical strength.",
    information: "There are several ways that asthenia can happen:\n• Exertion or burnout\n• Injuries (muscle strains)\n• Lack of nutrition\n• Circulatory or nervous system disruptions",
    image: "../assets/symptoms/weakness.png"
  }
];

const healthRareSymptoms = [
  {
    name: "Ageusia",
    definition: "Total loss of your sense of taste.",
    information: "Health conditions that may cause a loss of taste include:\n• COVID-19\n• Sinus infections or the common cold\n• Strep throat",
    image: "../assets/symptoms/ageusia.png"
  },
  {
    name: "Anosmia",
    definition: "Inability to detect odors (loss of smell).",
    information: "Anosmia is often a temporary side effect of:\n• Colds, flu, or nasal congestion\n• Nasal polyps\n• COVID-19",
    image: "../assets/symptoms/anosmia.png"
  },
  {
    name: "Aphasia",
    definition: "Language disorder affecting communication.",
    information: "Symptoms of aphasia depend on which part of the brain is damaged:\n• Trouble finding or saying the right words\n• Difficulty understanding conversations\n• Challenges in reading and writing",
    image: "../assets/symptoms/aphasia.png"
  },
  {
    name: "Ascites",
    definition: "Buildup of fluid in the abdomen.",
    information: "Ascites is most often caused by cirrhosis (liver disease). Other symptoms include:\n• Rapid weight gain and a swollen belly\n• Difficulty breathing",
    image: "../assets/symptoms/ascites.png"
  },
  {
    name: "Ataxia",
    definition: "Problems coordinating muscle movements.",
    information: "Ataxia symptoms can develop over time or come on suddenly:\n• Unsteady walking gait\n• Difficulty swallowing\n• Slurred speech",
    image: "../assets/symptoms/ataxia.png"
  },
  {
    name: "Cataplexy",
    definition: "Sudden muscle weakness triggered by emotions.",
    information: "A main symptom of narcolepsy type 1. Key features include:\n• Triggered by laughter, surprise, or anger\n• Brief duration (seconds to minutes)\n• Consciousness is maintained during the attack",
    image: "../assets/symptoms/cataplexy.png"
  },
  {
    name: "Confusion",
    definition: "Disrupted brain activity affecting thinking.",
    information: "Confusion has many causes, including:\n• Alcohol or drug poisoning\n• Blood sugar extremes\n• Dehydration or head injuries",
    image: "../assets/symptoms/confusion.png"
  },
  {
    name: "Dysphagia",
    definition: "Medical term for difficulty swallowing.",
    information: "Dysphagia can be caused by various issues:\n• Nervous system or muscle disorders\n• Pain while swallowing or feeling of food stuck",
    image: "../assets/symptoms/dysphagia.png"
  },
  {
    name: "Hallucinations",
    definition: "False perceptions involving the senses.",
    information: "Hallucinations involve sensing things that aren't there:\n• Seeing or hearing things\n• Smelling or feeling phantom sensations",
    image: "../assets/symptoms/hallucinations.png"
  },
  {
    name: "Hiccups (Persistent)",
    definition: "Repeated spasms of the diaphragm.",
    information: "Usually temporary, but persistent hiccups can be triggered by:\n• Eating too fast or spicy foods\n• Carbonated beverages or smoking\n• Emotional stress",
    image: "../assets/symptoms/hiccups.png"
  },
  {
    name: "Jaundice",
    definition: "Yellowing of skin or eyes from excess bilirubin.",
    information: "In addition to the yellow tinge, common symptoms include:\n• Pale-colored stools\n• Dark-colored urine\n• Itchiness (pruritus)",
    image: "../assets/symptoms/jaundice.png"
  },
  {
    name: "Melena",
    definition: "Black, tarry stool from upper GI bleeding.",
    information: "Melena indicates bleeding in the upper gastrointestinal tract and requires immediate medical attention.",
    image: "../assets/symptoms/melena.png"
  },
  {
    name: "Paralysis",
    definition: "Inability to make voluntary muscle movements.",
    information: "Common causes include:\n• Strokes and spinal cord injuries\n• Autoimmune diseases (like MS) or birth defects",
    image: "../assets/symptoms/paralysis.png"
  },
  {
    name: "Petechiae",
    definition: "Pinpoint-sized spots of bleeding under skin.",
    information: "Appear as small red, purple, or brown spots that do not blanch (fade) when pressed.",
    image: "../assets/symptoms/petechiae.png"
  },
  {
    name: "Purpura",
    definition: "Purple spots/patches on skin or membranes.",
    information: "Purpura are larger than petechiae and can be caused by immune disorders, medications, or infections.",
    image: "../assets/symptoms/purpura.png"
  },
  {
    name: "Seizures",
    definition: "Surge of abnormal electrical activity in brain.",
    information: "Symptoms of a seizure include:\n• Temporary loss of consciousness\n• Uncontrollable muscle movements (convulsions)\n• Blank staring",
    image: "../assets/symptoms/seizures.png"
  },
  {
    name: "Tremors",
    definition: "Involuntary rhythmic shaking of body parts.",
    information: "Tremors can range from mild to severe and are often out of your control. They look like trembling or shakiness.",
    image: "../assets/symptoms/tremors.png"
  },
  {
    name: "Weight Loss (Unexplained)",
    definition: "Unexpected drop in body weight.",
    information: "Unexplained weight loss can be an early symptom of:\n• Undiagnosed diabetes or hyperthyroidism\n• Eating disorders or mental health conditions\n• Parasitic infections",
    image: "../assets/symptoms/weight-loss.png"
  }
];
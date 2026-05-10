const medicines = [
  {
    "genericName": "Amlodipine",
    "image": "../assets/medicines/amlodipine.png",
    "brandNames": ["Katerzia", "Norliqva", "Norvasc", "Sdamlo"],
    "drugClass": "Calcium channel blockers",
    "dosageForms": ["oral tablet 5 mg, 10mg, 2.5 mg", "oral liquid 1 mg/mL", "oral suspension 1 mg/mL", "powder for oral solution (2.5 mg, 5 mg, 10 mg)"],
    "description": "Amlodipine is used to lower high blood pressure and treat chest pain (angina). It relaxes and widens blood vessels. It does not stop chest pain once it starts.",
    "uses": ["High blood pressure", "Chest pain (angina)", "Risk reduction of heart attack and stroke"],
    "importantInformation": "When taken regularly, it helps control blood pressure but does not stop an active angina attack."
  },
  {
    "genericName": "Ambroxol Hydrochloride",
    "image": "../assets/medicines/ambroxol-hydrochloride.png",
    "brandNames": ["Muscosolvan", "Lasolvan", "Ambrolex"],
    "drugClass": "Mucolytic agent, Expectorant",
    "dosageForms": ["Tablets", "syrup/oral liquid", "lozenges", "drops", "injection"],
    "description": "Used to loosen and thin thick mucus (phlegm) in the lungs.",
    "uses": ["Cough with mucus", "Chest congestion"],
    "importantInformation": null
  },
  {
    "genericName": "Amoxicillin",
    "image": "../assets/medicines/amoxicillin.png",
    "brandNames": ["Amoxil", "Trimox", "Moxataq"],
    "drugClass": "Aminopenicillins",
    "dosageForms": ["oral capsule (250 mg; 500 mg)", "oral powder for reconstitution (125 mg/5 mL; 200 mg/5 mL; 250 mg/5 mL; 400 mg/5 mL)"],
    "description": "Amoxicillin is an antibiotic used to treat bacterial infections. It can be combined with clavulanate, or with clarithromycin and acid reducers to treat H.pylori stomach ulcers.",
    "uses": ["Respiratory infections", "Ear, nose, and throat infections", "Skin infections", "Urinary tract infections (UTI)", "Stomach ulcer (with other medicines)", "Tonsillitis", "Sinusitis", "Bronchitis", "Pneumonia"],
    "importantInformation": null
  },
  {
    "genericName": "Aspirin (Oral)",
    "image": "../assets/medicines/apirin.png",
    "brandNames": ["Arthritis Pain", "Aspi-Cor", "Aspir 81", "Aspir-Low", "Bayer-Plus"],
    "drugClass": "Platelet aggregation inhibitors, Salicylates, Nonsteroidal anti-inflammatory drugs (NSAIDs)",
    "dosageForms": ["Tablets", "Chewable Tablets", "Enteric-coated Tablets", "Effervescent Tablets", "Dispersible Tablets", "Rectal Tablets", "Low-dose Aspirin", "Topical Forms"],
    "description": "Aspirin is classified as a salicylate. It functions by decreasing the levels of substances in the body that lead to pain, fever, and inflammation. It is occasionally utilized to manage or prevent heart attacks, strokes, and angina (chest pain).",
    "uses": ["Headaches", "Toothaches", "Muscle and Joint Pain", "Minor Injuries", "Helps bring down high body temperature", "Anti-inflammatory (reduces swelling)", "Arthritis", "Heart and blood protection (low-dose use)", "Helps prevent blood clots", "Reduce heart attacks", "Reduce strokes"],
    "importantInformation": "Aspirin should be administered for cardiovascular issues only with a physician's guidance."
  },
  {
    "genericName": "Atorvastatin",
    "image": "../assets/medicines/atorvastatin.png",
    "brandNames": ["Atorvaliq", "Lipitor"],
    "drugClass": "Statins",
    "dosageForms": ["oral tablet (10 mg; 20 mg; 40 mg; 80 mg)", "oral suspension (20 mg/5 mL)"],
    "description": "Lowers 'bad' cholesterol (LDL) and triglycerides while increasing 'good' cholesterol (HDL). Usually taken once daily.",
    "uses": ["High cholesterol", "Heart disease prevention (heart attack, stroke)", "Angina (chest pain) prevention", "Protection for high-risk patients"],
    "importantInformation": null
  },
  {
    "genericName": "Azithromycin",
    "image": "../assets/medicines/azithromycin.png",
    "brandNames": ["Azasite", "Azithromycin 3 Day Dose Pack", "Azithromycin 5 Day Dose Pack", "Zithromax", "Zithromax TRI-PAK", "Zithromax Z-Pak", "Zmax"],
    "drugClass": "Macrolides",
    "dosageForms": ["Tablets", "Capsules", "oral suspension (liquid/syrup)", "powder for oral suspension", "Intravenous (IV) infusion"],
    "description": "Azithromycin is an antibiotic that fights bacteria. It is used to treat many different types of infections.",
    "uses": ["Respiratory tract infections", "Ear, nose, and throat infections", "Skin and soft tissue infections", "Sexually transmitted infections (STIs)", "Eye infections", "Other bacterial infections"],
    "importantInformation": null
  },
  {
    "genericName": "Bisacodyl",
    "image": "../assets/medicines/bisacodyl.png",
    "brandNames": ["Alophen", "Bisac-Evac", "Correct", "Correctol", "Dulcolax Laxative"],
    "drugClass": "Laxatives",
    "dosageForms": ["oral delayed release tablet (5 mg)", "oral tablet (5 mg)", "rectal enema (10 mg)", "rectal suppository (10 mg)"],
    "description": "Helps the intestines move to cause a bowel movement. Used to empty bowels before medical procedures.",
    "uses": ["Constipation relief", "Bowel preparation before procedures", "Short-term bowel cleaning"],
    "importantInformation": null
  },
  {
    "genericName": "Bismuth Subsalicylate",
    "image": "../assets/medicines/bismuth-subsalicylate.png",
    "brandNames": ["Bismatrol Maximum Strength", "Peptic Relief", "Pepto-Bismol", "Pepto-Bismol Maximum Strength", "Bismarex"],
    "drugClass": "Antidiarrheals",
    "dosageForms": ["oral capsule (262 mg)", "oral suspension (1050 mg/10 mL; 262 mg/15 mL; 525 mg/15 mL; 525 mg/30 mL)"],
    "description": "Bismuth subsalicylate is a medicine used to treat stomach and intestinal problems.",
    "uses": ["Diarrhea", "Traveler's diarrhea", "Nausea", "Heartburn", "Indigestion", "Gas", "Upset stomach"],
    "importantInformation": null
  },
  {
    "genericName": "Budesonide",
    "image": "../assets/medicines/budenoside.png",
    "brandNames": [],
    "drugClass": "Anti-inflammatory",
    "dosageForms": [],
    "description": "Budesonide is a strong anti-inflammatory drug used to reduce inflammation in the body. It works by calming the immune system.",
    "uses": ["Eosinophilic esophagitis (EoE)", "Crohn’s Disease", "Ulcerative colitis", "IgA nephropathy (kidney disease)"],
    "importantInformation": null
  },
  {
    "genericName": "Calamine (Topical)",
    "image": "../assets/medicines/calamine-plain.png",
    "brandNames": ["Calamine Plain topical"],
    "drugClass": "Miscellaneous topical agents",
    "dosageForms": ["Lotion", "cream", "shake lotion suspension"],
    "description": "Provides a cooling feeling and helps dry up oozing or wet skin to relieve itching.",
    "uses": ["Chickenpox itching", "Insect bites", "Rashes", "Sunburn", "Eczema"],
    "importantInformation": null
  },
  {
    "genericName": "Calcium Carbonate",
    "image": "../assets/medicines/calcium-carbonate.png",
    "brandNames": ["Alka-Mints", "Alka-Seltzer Cool Action Heartburn Relief", "Alka-Seltzer Extra Strength Heartburn Relief", "Calcium Oyster Shell", "Cal-Gest"],
    "drugClass": "Antacids, Minerals and electrolytes",
    "dosageForms": ["oral suspension (1250 mg/5 mL)", "oral tablet (1250 mg; 600 mg; 648 mg)", "oral tablet, chewable (1000 mg; 1177 mg; 500 mg; 600 mg; 750 mg; 850 mg)"],
    "description": "Calcium is a mineral necessary for many normal functions of the body, especially in bone formation and maintenance. Calcium carbonate is used to prevent or treat a calcium deficiency.",
    "uses": ["Calcium supplement (bone health)", "Antacid (for stomach acid relief)", "Prevention of calcium deficiency during pregnancy or aging", "Phosphate binder (in kidney disease)"],
    "importantInformation": null
  },
  {
    "genericName": "Cephalexin",
    "image": "../assets/medicines/cephalexin.png",
    "brandNames": ["Keflex", "Biocef", "Zartan", "Panixine", "Daxbia"],
    "drugClass": "First generation cephalosporins (Antibiotic)",
    "dosageForms": ["oral capsule (250 mg; 500 mg; 750 mg)", "oral powder for reconstitution (125 mg/5 mL; 250 mg/5 mL)"],
    "description": "Antibiotic that kills bacteria in the body.",
    "uses": ["Throat infections", "Ear infections", "Skin infections", "Urinary tract infections (UTIs)", "Bone infections"],
    "importantInformation": null
  },
  {
    "genericName": "Cetirizine",
    "image": "../assets/medicines/cetirizine.png",
    "brandNames": ["Zyrtec"],
    "drugClass": "Antihistamines",
    "dosageForms": ["Tablets", "Chewable Tablets", "Oral Syrup/Solution", "Oral Drops"],
    "description": "A second-generation antihistamine, cetirizine lowers the body's natural histamine levels. Histamine can cause sneezing, itching, watery eyes, and runny nose.",
    "uses": ["Allergic rhinitis", "Sneezing", "Runny or itchy nose", "Itchy or watery eyes", "Utacaria (Hives)", "Itchy, red, raised skin rashes", "Seasonal allergies rhinitis", "Perennial allergic rhinitis (year-round allergies)", "Chronic idiopathic urticaria allergic asthma", "Physical urticaria", "Atopic dermatitis (eczema)", "Allergic reaction, itching, and swelling brought on by chronic urticaria"],
    "importantInformation": null
  },
  {
    "genericName": "Chlorpheniramine",
    "image": "../assets/medicines/chlorpheniramine.png",
    "brandNames": ["Aller-Chlor", "Allergy Relief (Chlorpheniramine)", "Ed-Chlor Ped Jr", "Wal-finate", "Allergy Relief"],
    "drugClass": "Antihistamines",
    "dosageForms": ["oral syrup (2 mg/5 mL)", "oral tablet (4 mg)", "oral tablet, extended release (12 mg)"],
    "description": "Blocks histamine to relieve allergy and cold symptoms.",
    "uses": ["Sneezing", "Itching", "Watery eyes", "Runny nose", "Allergies", "Common cold", "Flu"],
    "importantInformation": null
  },
  {
    "genericName": "Ciprofloxacin (Oral)",
    "image": "../assets/medicines/ciprofloxacin.png",
    "brandNames": ["Cipro", "Proquin XR"],
    "drugClass": "Quinolones and Fluoroquinolones (Antibiotic)",
    "dosageForms": [],
    "description": "Strong antibiotic for serious bacterial infections. Usually only used when safer antibiotics are not effective due to serious side effects.",
    "uses": ["Urinary tract infections (UTIs)", "Respiratory infections", "Skin and soft tissue infection", "Digestive system infections", "Serious infections", "Anthrax exposure", "Plague"],
    "importantInformation": "Can have serious side effects; typically a second-line treatment."
  },
  {
    "genericName": "Clotrimazole Topical",
    "image": "../assets/medicines/clotrimazole.png",
    "brandNames": ["Alevazol", "Anti-Fungal Liquid", "FungiCURE Pump Spray", "Lotrimin AF Cream for Ringworm", "Lotrimin AF For Her"],
    "drugClass": "Topical antifungals, Vaginal anti-infectives",
    "dosageForms": ["topical cream (1%)", "topical lotion (1%)", "topical ointment (1%)", "topical solution (1%)", "topical spray (1%)"],
    "description": "Applied to skin to treat fungal infections. Does not work for fungal infections of the nails or scalp.",
    "uses": ["Athlete’s foot", "Jock itch", "Ringworm", "Skin itching and irritation from fungus (redness, burning)"],
    "importantInformation": null
  },
  {
    "genericName": "Dextromethorphan",
    "image": "../assets/medicines/dextromethorphan.png",
    "brandNames": ["Babee Cof", "Benylin DM pediatric", "Buckley's Mixture", "Creomulsion", "Creo-Terpin"],
    "drugClass": "Antitussives",
    "dosageForms": ["Tablets", "Capsules/softgels", "Oral syrup/liquid", "Lozenges", "Combination cold medicines"],
    "description": "Dextromethorphan is a cough suppressant. It affects the signals in the brain that trigger cough reflex. It will not treat a cough that is caused by smoking, asthma, or emphysema.",
    "uses": ["Dry cough relief", "Suppresses non-productive (dry) cough caused by colds or flu", "Cold and flu symptom treatment", "Throat irritation-related cough", "Nighttime cough control"],
    "importantInformation": null
  },
  {
    "genericName": "Diclofenac",
    "image": "../assets/medicines/diclofenac.png",
    "brandNames": ["Cambia", "Zipsor", "Zorvolex", "Cataflam", "Voltaren", "Voltaren-XR", "Dyloject"],
    "drugClass": "Nonsteroidal anti-inflammatories (NSAIDs)",
    "dosageForms": ["Tablets", "extended-release tablets", "capsules", "topical gel/cream", "topical patches", "eye drops", "injectable solution (IV/IM)"],
    "description": "Relieves pain and inflammation. Some forms treat migraines that have already started but do not prevent future attacks.",
    "uses": ["Arthritis (osteoarthritis and rheumatoid arthritis)", "Ankylosing spondylitis", "Muscle or joint pain", "Menstrual cramps", "Migraine treatment"],
    "importantInformation": null
  },
  {
    "genericName": "Diphenhydramine",
    "image": "../assets/medicines/diphenhydramine.png",
    "brandNames": ["Allergy Relief", "Allermax", "Banophen", "Compoz Nighttime Sleep Aid"],
    "drugClass": "Anticholinergic antiemetics, Anticholinergic antiparkinson agents, Antihistamines, Miscellaneous anxiolytics, sedatives and hypnotics",
    "dosageForms": ["Tablets", "Capsules/softgels", "Oral liquid/syrup", "Chewable tablets", "Injectable solution", "Topical forms (creams/gels/sprays)"],
    "description": "Diphenhydramine is a first-generation antihistamine that blocks histamine in the body. It also treats motion sickness, induces sleep, and alleviates some Parkinson's disease symptoms.",
    "uses": ["Allergy relief", "Sneezing", "Runny or itchy nose", "Itchy or watery eyes", "Skin allergies and rashes", "Uticaria (Hives)", "Red, itchy, raised skin bumps", "Motion sickness (Nausea, vomiting, dizziness during travel)", "Sleep aid (short-term use for temporary insomnia)", "Cough and cold symptoms (post-natal drip and irritation)", "Emergency allergy treatment for severe reactions"],
    "importantInformation": null
  },
  {
    "genericName": "Famotidine",
    "image": "../assets/medicines/famotidine.png",
    "brandNames": [],
    "drugClass": "H2 Blockers (Acid reducers)",
    "dosageForms": [],
    "description": "Reduces the amount of acid in the stomach.",
    "uses": ["Stomach and intestinal ulcers", "Acid reflux/GERD", "Excess stomach acid conditions", "Heartburn relief"],
    "importantInformation": null
  },
  {
    "genericName": "Ferrous Sulfate",
    "image": "../assets/medicines/ferrous-sulfate.png",
    "brandNames": ["Feosol", "Fer-In-Sol", "Ferrousal", "Slow Fe", "Slow Release Iron"],
    "drugClass": "Iron products",
    "dosageForms": ["oral delayed release tablet (324 mg; 325 mg)", "oral elixir (220 mg/5 mL)", "oral liquid (15 mg/mL elemental iron)"],
    "description": "Iron supplement used to treat iron deficiency anemia. Helps increase iron levels for hemoglobin production.",
    "uses": ["Iron deficiency anemia", "Iron deficiency prevention (pregnancy, diet, blood loss)", "Low hemoglobin levels"],
    "importantInformation": null
  },
  {
    "genericName": "Fluconazole",
    "image": "../assets/medicines/fluconazole.png",
    "brandNames": ["Diflucan"],
    "drugClass": "Azole antifungals",
    "dosageForms": ["oral tablet", "oral suspension", "injection for intravenous infusion"],
    "description": "Antifungal medicine used for internal and external infections. Also used to prevent infections in weak immune systems.",
    "uses": ["Vaginal yeast infections", "Oral thrush (mouth infection)", "Throat and esophagus infections", "Serious internal fungal infections", "Cryptococcal meningitis", "Prevention in weak immune system (Cancer, AIDS, transplants)"],
    "importantInformation": null
  },
  {
    "genericName": "Folic Acid",
    "image": "../assets/medicines/folic-acid.png",
    "brandNames": ["FA-8", "Folacin-800", "FaLessa", "Folvite", "Quiofic"],
    "drugClass": "Vitamins (B9)",
    "dosageForms": ["oral tablet (0.4 mg; 0.8 mg; 1 mg)", "injection", "oral solution (0.2 mg/mL)"],
    "description": "Supplement used to help make healthy red blood cells and support normal cell growth/DNA formation.",
    "uses": ["Prevents birth defects (brain and spine) during pregnancy", "Treats folate deficiency anemia", "Prevents anemia", "Supports cell growth and repair"],
    "importantInformation": null
  },
  {
    "genericName": "Glimepiride",
    "image": "../assets/medicines/glimepiride.png",
    "brandNames": ["Amaryl"],
    "drugClass": "Sulfonylureas",
    "dosageForms": ["oral tablet (1 mg; 2 mg; 3 mg; 4 mg)"],
    "description": "Stimulates the pancreas to produce more insulin. Used with diet and exercise.",
    "uses": ["Type 2 diabetes treatment", "Blood sugar control", "Prevention of diabetes complications (kidney, nerve, eye, heart)"],
    "importantInformation": "Not for type 1 diabetes."
  },
  {
    "genericName": "Guaifenesin",
    "image": "../assets/medicines/guaifenesin.png",
    "brandNames": ["Mucinex", "Robitussin Mucus + Chest Congestion", "Triaminic Chest Congestion", "Tussin Expectorant", "Xpect", "Organidin NR", "Bidex 400"],
    "drugClass": "Expectorants",
    "dosageForms": ["Tablets", "Capsules", "Oral syrup/liquid", "Granules/powder packets", "Combination cold medicines"],
    "description": "Guaifenesin is an ingredient used to help clear mucus or phlegm from your chest by making mucus thinner and easier to cough up.",
    "uses": ["Chest congestion relief", "Productive (wet) cough treatment", "Cold and flu symptom relief", "Bronchitis symptom relief", "Fibromyalgia (off-label use, though clinical studies show it is not effective)"],
    "importantInformation": "Guaifenesin is not FDA approved for treatment of fibromyalgia."
  },
  {
    "genericName": "Hydrochlorothiazide",
    "image": "../assets/medicines/hydrochlorothiazide.png",
    "brandNames": ["HydroDIURIL", "Esidrix", "Inzirqo", "Microzide"],
    "drugClass": "Thiazide diuretics",
    "dosageForms": ["oral capsule (12.5 mg)", "oral tablet (12.5 mg; 25 mg; 50 mg)", "oral suspension (10 mg/mL)"],
    "description": "A 'water pill' used to help the body remove extra salt and water.",
    "uses": ["High blood pressure (hypertension)", "Fluid retention (edema) from heart, liver, or kidney issues", "Swelling caused by medications like steroids or estrogen"],
    "importantInformation": null
  },
  {
    "genericName": "Hydrocortisone Butyrate",
    "image": "../assets/medicines/hydrocortisone-butyrate.png",
    "brandNames": [],
    "drugClass": "Prescription steroid cream",
    "dosageForms": ["Topical cream/ointment"],
    "description": "A steroid cream used to treat skin conditions causing inflammation, redness, and itching.",
    "uses": ["Atopic dermatitis (eczema)", "Skin inflammation", "Itchy skin conditions", "Allergic skin reactions"],
    "importantInformation": null
  },
  {
    "genericName": "Ibuprofen",
    "image": "../assets/medicines/ibuprofen.png",
    "brandNames": ["Advil", "Genpril", "IBU", "Midol IB", "MItron IB", "Propinal", "Smart Sense Children's Ibuprofen"],
    "drugClass": "Nonsteroidal Anti-Inflammatory Drugs (NSAIDs)",
    "dosageForms": ["effervescent tablet", "intravenous (infusion) injection", "orally disintegrating tablet", "oral capsule", "oral powder", "oral suspension", "oral tablet", "suppository"],
    "description": "Ibuprofen is a type of nonsteroidal anti-inflammatory medication (NSAID). It functions by lowering the levels of hormones that lead to inflammation and discomfort in the body. It can be administered to adults and children who are at least 6 months of age.",
    "uses": ["Headaches", "Toothaches", "Muscle aches or injuries", "Back pain", "Arthritis", "Sprains and strains", "Fever reduction", "Menstrual Cramps (period pain)"],
    "importantInformation": null
  },
  {
    "genericName": "Insulin Regular",
    "image": "../assets/medicines/insulin-regular.png",
    "brandNames": ["HumuLIN R", "Myxredlin", "NovoLIN R"],
    "drugClass": "Insulin",
    "dosageForms": ["Injection solution (vial)", "pre-filled pens (cartridges or pen devices)", "intravenous (IV) form"],
    "description": "Short-acting insulin that starts working within 30 minutes to 1 hour, peaks in a few hours, and lasts about 6 hours. It moves sugar from the blood into cells for energy.",
    "uses": ["Type 1 diabetes", "Type 2 diabetes", "Pregnancy-related diabetes (gestational diabetes)", "Blood sugar control"],
    "importantInformation": null
  },
  {
    "genericName": "Ipratropium Inhalation",
    "image": "../assets/medicines/ipratropium-inhalation.png",
    "brandNames": ["Atrovent HFA", "Atrovent"],
    "drugClass": "Anticholinergic bronchodilators",
    "dosageForms": ["inhalation aerosol (17 mcg/inh)", "inhalation solution (500 mcg/2.5 mL)"],
    "description": "Helps open airways and make breathing easier, primarily for COPD.",
    "uses": ["Chronic Obstructive Pulmonary Disease (COPD)", "Chronic bronchitis", "Emphysema", "Bronchospasm prevention", "Asthma (as additional treatment)", "Runny nose (in nasal spray form)"],
    "importantInformation": null
  },
  {
    "genericName": "Lactulose",
    "image": "../assets/medicines/lactulose.png",
    "brandNames": [],
    "drugClass": "Laxative",
    "dosageForms": [],
    "description": "Used to treat constipation and certain liver-related conditions.",
    "uses": ["Chronic constipation", "Liver disease (hepatic encephalopathy)", "Ammonia reduction in the body"],
    "importantInformation": null
  },
  {
    "genericName": "Lisinopril",
    "image": "../assets/medicines/lisinopril.png",
    "brandNames": ["Prinivil", "Qbrelis", "Zestril"],
    "drugClass": "Angiotensin Converting Enzyme Inhibitors",
    "dosageForms": ["oral solution (1 mg/mL)", "oral tablet (10 mg; 2.5 mg; 20 mg; 30 mg; 40 mg; 5 mg)"],
    "description": "Treats high blood pressure and heart failure by relaxing blood vessels. Suitable for adults and children 6+.",
    "uses": ["High blood pressure (hypertension)", "Heart failure", "Survival improvement after heart attack", "Kidney protection"],
    "importantInformation": null
  },
  {
    "genericName": "Loperamide",
    "image": "../assets/medicines/loperamide.png",
    "brandNames": ["Diamode", "Imodium", "Maalox Anti-Diarrheal", "Pepto Diarrhea Control"],
    "drugClass": "Antidiarrheals",
    "dosageForms": ["oral capsule", "oral liquid", "oral suspension", "oral tablet", "oral tablet, chewable"],
    "description": "Loperamide works by acting on mu-opioid receptors in the gut to slow down movement and contractions, allowing more time for fluid absorption.",
    "uses": ["Acute diarrhea", "Chronic diarrhea", "Traveler's diarrhea", "Reducing stool frequency and urgency", "Reduce stool amount in people with an ileostomy"],
    "importantInformation": "Loperamide was FDA approved in 1976."
  },
  {
    "genericName": "Loratadine",
    "image": "../assets/medicines/loratadine.png",
    "brandNames": ["Alavert", "Claritin", "Claritin Reditab", "ohm Allergy Relief", "Tavist ND", "Wal-itin"],
    "drugClass": "Antihistamines",
    "dosageForms": ["Oral Capsule (10mg)", "Oral Syrup (5 mg/5 mL)", "Oral Tablet Chewable (5mg)"],
    "description": "An antihistamine called loratadine lessens the effects of the body's natural histamine molecule. It is mainly used to treat allergy symptoms without causing much drowsiness, making it suitable for daytime use.",
    "uses": ["Allergy Rhinitis (hay fever / allergies)", "Sneezing", "Runny or itchy nose", "Itchy or watery nose", "Urtacaria (hives)", "Itchy, red, raised skins", "Skin rash", "Persistent skin sensitivities"],
    "importantInformation": null
  },
  {
    "genericName": "Losartan",
    "image": "../assets/medicines/losartan.png",
    "brandNames": [],
    "drugClass": "Angiotensin II receptor blockers",
    "dosageForms": [],
    "description": "Used for heart, blood pressure, and kidney-related conditions. It reduces the risk of stroke in people with high blood pressure and an enlarged heart, and protects kidneys in type 2 diabetics.",
    "uses": ["High blood pressure (hypertension)", "Stroke risk reduction", "Kidney protection in diabetes", "Heart strain reduction"],
    "importantInformation": null
  },
  {
    "genericName": "Mefenamic Acid",
    "image": "../assets/medicines/mefenamic-acid.png",
    "brandNames": [],
    "drugClass": "Nonsteroidal anti-inflammatory drugs (NSAIDs)",
    "dosageForms": [],
    "description": "Relieves mild to moderate pain for a short time, usually no more than 7 days. Especially effective for menstrual cramps.",
    "uses": ["Menstrual cramps (dysmenorrhea)", "Toothache", "Headache", "Muscle pain", "Post-surgery pain", "Short-term pain relief"],
    "importantInformation": null
  },
  {
    "genericName": "Metformin",
    "image": "../assets/medicines/metformin.png",
    "brandNames": [],
    "drugClass": "Biguanides",
    "dosageForms": [],
    "description": "Metformin is used to control blood sugar levels and prevent diabetes complications.",
    "uses": ["Type 2 diabetes treatment", "Blood sugar control improvement", "Prevention of diabetes complications", "Heart disease risk reduction (indirect effect)"],
    "importantInformation": null
  },
  {
    "genericName": "Metoprolol",
    "image": "../assets/medicines/metoprolol.png",
    "brandNames": ["Kapspargo Sprinkle", "Lopressor", "Toprol-XL"],
    "drugClass": "Cardioselective beta blockers",
    "dosageForms": ["Tablets (immediate-release)", "Extended-release tablets", "Injection (IV form)"],
    "description": "Metoprolol helps the heart work more slowly and with less force. The injectable form may be used during a heart attack in hospitals.",
    "uses": ["High blood pressure (hypertension)", "Angina (chest pain)", "Heart failure complication/hospitalization reduction"],
    "importantInformation": null
  },
  {
    "genericName": "Metronidazole",
    "image": "../assets/medicines/metronidazole.png",
    "brandNames": ["Flagyl", "Flagyl ER", "Flagyl I.V.", "RTU", "Likmez"],
    "drugClass": "Amebicides, Miscellaneous antibiotics",
    "dosageForms": ["intravenous solution", "oral capsule", "oral tablet", "extended-release tablet", "oral suspension"],
    "description": "Metronidazole is a medicine used to treat infections caused by certain bacteria and parasites in the vagina, stomach, liver, skin, and lung.",
    "uses": ["Sexually transmitted infection (STIs)", "Parasitic infections (amebiasis in intestines and livers)", "Bacterial vaginal infections (bacterial vaginosis)", "Anaerobic bacterial infections", "Dental and gum infections"],
    "importantInformation": null
  },
  {
    "genericName": "Montelukast",
    "image": "../assets/medicines/montelukast.png",
    "brandNames": ["Singulair"],
    "drugClass": "Leukotriene modifiers",
    "dosageForms": ["oral granule", "oral tablet", "oral chewable tablet"],
    "description": "Helps control asthma and allergies by reducing inflammation. Taken daily for prevention.",
    "uses": ["Asthma prevention", "Exercise-induced breathing problems", "Allergic rhinitis (seasonal or year-round)", "Long-term airway inflammation and nasal congestion"],
    "importantInformation": "Not a fast-acting medicine and cannot be used to treat sudden asthma attacks."
  },
  {
    "genericName": "Naproxen",
    "image": "../assets/medicines/naproxen.png",
    "brandNames": [],
    "drugClass": "Nonsteroidal anti-inflammatory drugs (NSAIDs)",
    "dosageForms": [],
    "description": "Used to relieve pain and reduce inflammation. Slow-release forms are mainly for long-term conditions like arthritis.",
    "uses": ["Arthritis", "Gout", "Muscle and tendon pain", "Menstrual cramps", "General pain and inflammation"],
    "importantInformation": null
  },
  {
    "genericName": "Omeprazole",
    "image": "../assets/medicines/omeprazole.png",
    "brandNames": ["FIRST Omeprazole", "Omeprazole + SyrSpend SF Alka", "PriLOSEC", "PriLOSEC OTC", "Zegerid (Original Formulation)"],
    "drugClass": "Proton pump inhibitors",
    "dosageForms": ["oral delayed release capsule (10 mg; 20 mg; 40 mg)", "oral delayed release tablet (20 mg)"],
    "description": "Omeprazole lowers too much stomach acid by blocking acid production. For OTC use, it helps relieve frequent heartburn when taken daily for 14 days.",
    "uses": ["Acid reflux (GERD)", "Stomach ulcers", "Duodenal ulcers", "Erosive ulcers", "Zollinger-Ellison syndrome", "H.pylori infection (with antibiotics)", "Frequent heartburn (OTC use)"],
    "importantInformation": null
  },
  {
    "genericName": "Paracetamol",
    "image": "../assets/medicines/paracetamol.png",
    "brandNames": ["Panadol", "Calpol", "Tylenol", "Alvedon"],
    "drugClass": "Analgesic (pain reliever), Antipyretic (fever reducer)",
    "dosageForms": ["effervescent tablet", "intravenous (infusion) injection", "orally disintegrating tablet", "oral capsule", "oral powder", "oral suspension", "oral tablet", "suppository"],
    "description": "Paracetamol (commonly known as Panadol, Clapol, or Alvedon) is a medication that acts as both a pain reliever and a fever reducer, aimed at providing temporary relief from mild to moderate discomfort and elevated body temperature. It is frequently found as a component in cold and flu remedies and can also be utilized independently",
    "uses": ["Headache", "Tension headache", "Migraine", "Backache", "Rheumatic and muscle pain", "Mild arthritis/osteoarthritis", "Toothache", "Period pain (dysmenorrhea)", "Colds and flu symptoms", "Sore throat", "Sinus pain", "Post-operative pain", "Fever (pyrexia)"],
    "importantInformation": "Paracetamol (acetaminophen) is found in many different OTC cold and flu medications. Do not take paracetamol if you are taking any other prescription or non-prescription medications containing paracetamol or acetaminophen."
  },
  {
    "genericName": "Phenylephrine",
    "image": "../assets/medicines/phenylephrine.png",
    "brandNames": [],
    "drugClass": "Decongestant",
    "dosageForms": [],
    "description": "Narrows swollen blood vessels in the nose. In hospitals, it can be used to raise very low blood pressure.",
    "uses": ["Nasal congestion (stuffy nose)", "Sinus pressure and congestion", "Common cold symptoms", "Allergy-related congestion", "Raising low blood pressure (hospital use)"],
    "importantInformation": "Does not treat the cause of the illness or make recovery faster."
  },
  {
    "genericName": "Pseudoephedrine",
    "image": "../assets/medicines/pseudoephedrine.png",
    "brandNames": ["Chlor Trimeton Nasal Decongestant", "Contac Cold", "Drixoral Decongestant Non-Drowsy", "Elixsure Decongestant", "Entex"],
    "drugClass": "Decongestants",
    "dosageForms": ["Tablets", "Extended-release tablets (12-hour or 24-hour)", "Capsules", "Oral liquid/syrup", "Combination cold medicines"],
    "description": "An oral nasal decongestant that narrows blood vessels in the nasal passages to alleviate symptoms and lessen nasal congestion.",
    "uses": ["Nasal congestion (stuffy nose)", "Sinus congestion and pressure", "Allergic rhinitis (allergy-related congestion)", "Eustachian tube congestion (ear pressure)", "Cold and flu symptom relief"],
    "importantInformation": null
  },
  {
    "genericName": "Salbutamol",
    "image": "../assets/medicines/salbutamol.png",
    "brandNames": ["Ventolin", "Airomir", "Asthalin", "Asmatol", "Azmasol"],
    "drugClass": "Short-acting beta-2 agonist (SABA)/ Bronchodilator",
    "dosageForms": ["metered-dose aerosol inhalation (inhaler)", "inhalation powder (dry powder inhaler)", "solution for inhalation", "oral syrup", "oral tablet", "intravenous (infusion) injection", "intravenous (bolus) injection", "subcutaneous injection", "intramuscular injection"],
    "description": "Salbutamol (also called albuterol) is a fast-acting medicine used to help people breathe easier by relaxing and opening airways. The effect usually lasts 4 to 6 hours.",
    "uses": ["Asthma", "COPD (including chronic bronchitis and emphysema)", "Relieving wheezing, coughing, chest tightness, and shortness of breath"],
    "importantInformation": null
  },
  {
    "genericName": "Simethicone",
    "image": "../assets/medicines/simethicone.png",
    "brandNames": ["Alka-Seltzer Anti-Gas", "Bicarsim", "Gas Aide", "Gas Relief Extra Strength", "Gas Relief Ultra Strength Softgels"],
    "drugClass": "Miscellaneous GI agents",
    "dosageForms": ["oral capsule (125 mg; 180 mg; 250 mg; 500 mg)", "oral liquid (125 mg/5 mL)", "oral suspension (20 mg/0.3 mL)"],
    "description": "Relieves painful pressure caused by excess gas in the stomach and intestines. Safe for babies, children, and adults.",
    "uses": ["Gas (flatulence)", "Abdominal bloating and pressure"],
    "importantInformation": null
  }
];
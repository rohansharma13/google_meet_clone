export const ALL_NAMES = [
  // Indian Names
  "Aarav Sharma", "Priya Patel", "Rohan Mehta", "Ananya Singh", "Vikram Nair",
  "Kavya Reddy", "Arjun Gupta", "Sneha Iyer", "Karan Malhotra", "Divya Joshi",
  "Rahul Verma", "Pooja Agarwal", "Amit Kumar", "Neha Bose", "Sanjay Rao",
  "Ritu Mishra", "Deepak Pandey", "Sunita Chauhan", "Manish Tiwari", "Pallavi Saxena",
  "Nikhil Chandra", "Priyanka Dubey", "Suresh Pillai", "Meera Nambiar", "Varun Krishnan",
  "Lakshmi Subramaniam", "Aditya Bhatt", "Swati Banerjee", "Rajesh Sinha", "Ankita Choudhury",
  "Gaurav Shukla", "Nandini Devi", "Tarun Bajaj", "Simran Kaur", "Harpreet Singh",
  "Jasleen Gill", "Balvinder Sodhi", "Gurpreet Bhatia", "Mandeep Sandhu", "Parminder Dhillon",
  "Ranjit Khanna", "Veena Kapoor", "Ashok Luthra", "Madhu Tandon", "Vinod Chopra",
  "Geeta Bhardwaj", "Sunil Rawat", "Kamla Devi", "Prakash Ojha", "Sarita Yadav",
  "Mohan Thakur", "Lata Tripathi", "Ramesh Dubey", "Gita Pandey", "Shyam Lal",
  "Chitra Nair", "Balachandran Menon", "Srividya Krishnamurthy", "Raghunath Swami", "Padmavathi Iyengar",
  "Shankar Narayanan", "Geetha Raman", "Anand Subramanian", "Revathi Chandrasekaran", "Murugan Pillai",
  "Jayalakshmi Sundaram", "Venkatesh Gopal", "Sumathi Natarajan", "Karthik Balasubramaniam", "Nithya Ramachandran",
  "Dinesh Mahadevan", "Radha Krishnaswamy", "Subbaiah Mudaliar", "Vimala Durai", "Selvam Karuppiah",
  "Muthulakshmi Rajan", "Prabhu Shanmugam", "Kavitha Saravanan", "Rajkumar Arumugam", "Saranya Senthil",
  "Arun Balakrishnan", "Indira Sridhar", "Ganesh Thirumalai", "Premi Suresh", "Thilaga Raj",
  "Zara Khan", "Imran Sheikh", "Ayesha Siddiqui", "Faisal Rahman", "Rukhsar Hussain",
  "Tariq Ansari", "Sabrina Mirza", "Nasir Akhtar", "Hina Qureshi", "Salman Malik",
  "Reshma Begum", "Wasim Akram", "Shahnaz Parveen", "Asif Chowdhury", "Rubina Ali",
  "Kunal Desai", "Bhavna Shah", "Jayesh Trivedi", "Hetal Parikh", "Chirag Vora",
  "Urvi Solanki", "Mitesh Prajapati", "Ruchi Bhatt", "Dhrumil Modi", "Foram Gandhi",
  "Tushar Panchal", "Neeta Kothari", "Hitesh Rawal", "Jinal Mehta", "Parth Thakkar",

  // Western Names
  "James Wilson", "Emily Johnson", "Michael Brown", "Sarah Davis", "Robert Miller",
  "Jessica Taylor", "William Anderson", "Ashley Thomas", "David Jackson", "Amanda White",
  "Christopher Harris", "Stephanie Martin", "Matthew Thompson", "Jennifer Garcia", "Joshua Martinez",
  "Megan Robinson", "Andrew Clark", "Lauren Rodriguez", "Daniel Lewis", "Rachel Lee",
  "Joseph Walker", "Brittany Hall", "Ryan Allen", "Samantha Young", "Kevin Hernandez",
  "Kayla King", "Brandon Wright", "Alexis Lopez", "Justin Hill", "Hannah Scott",
  "Tyler Green", "Amber Adams", "Aaron Baker", "Danielle Gonzalez", "Adam Nelson",
  "Crystal Carter", "Nathan Mitchell", "Nicole Perez", "Patrick Roberts", "Melissa Turner",
  "Zachary Phillips", "Amy Campbell", "Kyle Parker", "Heather Evans", "Eric Edwards",
  "Lisa Collins", "Jeremy Stewart", "Kelly Sanchez", "Sean Morris", "Diana Rogers",
  "Brian Reed", "Karen Cook", "Timothy Morgan", "Sandra Bell", "Jerry Murphy",
  "Shirley Bailey", "Frank Rivera", "Angela Cooper", "Scott Richardson", "Kathleen Cox",
  "Gregory Howard", "Pamela Ward", "Raymond Torres", "Emma Peterson", "Samuel Gray",
  "Carolyn Ramirez", "Jack James", "Janet Watson", "Dennis Brooks", "Alice Kelly",
  "Edward Sanders", "Gloria Price", "Frank Bennett", "Ruby Wood", "Ethan Barnes",
  "Liam Sullivan", "Noah Simmons", "Mason Foster", "Lucas Powell", "Oliver Long",
  "Elijah Patterson", "Aiden Hughes", "Caden Flores", "Jackson Washington", "Sebastian Butler",
  "Owen Simmons", "Jayden Ross", "Lucas Henderson", "Caleb Coleman", "Connor Jenkins",
  "Ava Thompson", "Isabella Moore", "Mia Anderson", "Charlotte Williams", "Amelia Jones",
  "Harper Brown", "Evelyn Davis", "Abigail Miller", "Emily Wilson", "Elizabeth Taylor",
  "Sofia Jackson", "Avery White", "Ella Harris", "Grace Martin", "Victoria Thompson",
  "Chloe Garcia", "Riley Martinez", "Penelope Robinson", "Layla Clark", "Lillian Rodriguez",
  "Nora Lewis", "Zoey Lee", "Mila Walker", "Aubrey Hall", "Hannah Allen",
  "Lily Young", "Addison Hernandez", "Eleanor King", "Natalie Wright", "Brooklyn Lopez",
  "Leah Hill", "Scarlett Scott", "Madison Green", "Anna Adams", "Savannah Baker",
  "Aria Gonzalez", "Paisley Nelson", "Skylar Carter", "Stella Mitchell", "Violet Perez",
  "Claire Roberts", "Bella Turner", "Aurora Phillips", "Lucy Campbell", "Anna Parker",
  "Samantha Evans", "Caroline Edwards", "Genesis Collins", "Aaliyah Stewart", "Kennedy Sanchez",
  "Serenity Morris", "Autumn Rogers", "Destiny Reed", "Trinity Cook", "Faith Morgan",
  "Jasmine Bell", "Jade Murphy", "Gabriella Bailey", "Valeria Rivera", "Elena Cooper",
  "Maria Richardson", "Julia Cox", "Eva Howard", "Isabelle Ward", "Naomi Torres",

  // More Indian names
  "Yash Acharya", "Tanvi Kulkarni", "Nitin Deshpande", "Ashwini Patil", "Siddharth Apte",
  "Madhuri Joshi", "Girish Naik", "Vaishali Shetty", "Prasad Kamath", "Shweta More",
  "Hemant Gaikwad", "Shruti Jadhav", "Vijay Salunkhe", "Rupali Pawar", "Milind Bhosale",
  "Smita Shirke", "Datta Mhatre", "Vijaya Phule", "Bhaskar Khandare", "Seema Jambhale",
  "Santosh Wadekar", "Prabha Chavan", "Kishore Thorat", "Savita Nimbalkar", "Sudhir Rane",
  "Mangal Dhatrak", "Anil Bobade", "Rekha Ingale", "Ganesh Gavhane", "Chetna Kale",
  "Suresh Kharat", "Vandana Waghmare", "Ramchandra Munde", "Bharati Jagtap", "Dilip Kamble",
  "Sunanda Yadav", "Manoj Deshmukh", "Archana Bhalerao", "Vinayak Pansare", "Meenakshi Dahake",
  "Alok Srivastava", "Punam Singh", "Vivek Agnihotri", "Manju Shukla", "Rajiv Garg",
  "Sudha Rastogi", "Pawan Mittal", "Jyoti Goyal", "Ashish Bhatnagar", "Mamta Jain",
  "Ravinder Gupta", "Usha Sharma", "Naresh Kumar", "Pushpa Devi", "Shiv Kumar",
  "Leela Mishra", "Ramprasad Tiwari", "Saroj Pathak", "Santosh Pandey", "Radha Shukla",
  "Dinesh Patel", "Sharda Amin", "Mahesh Thakkar", "Bharti Parekh", "Prakash Jain",
  "Preeti Banker", "Nilesh Pandya", "Daksha Vora", "Dharmesh Mehta", "Hansa Kapadia",
  "Narendra Modi", "Jyotindra Shah", "Ramesh Patel", "Savita Trivedi", "Haresh Joshi",

  // More Western Names
  "Nathan Drake", "Olivia Stone", "Henry Collins", "Zoe Patterson", "Arthur Hughes",
  "Isla Flores", "Charles Washington", "Elise Butler", "Frederick Ross", "Vera Henderson",
  "Leonard Coleman", "Petra Jenkins", "Cecil Simmons", "Ingrid Foster", "Wallace Powell",
  "Ursula Long", "Reginald Patterson", "Margot Hughes", "Herbert Flores", "Cecelia Washington",
  "Clifford Butler", "Rosalie Ross", "Gilbert Henderson", "Harriet Coleman", "Edmund Jenkins",
  "Anastasia Simmons", "Maurice Foster", "Gwendolyn Powell", "Cornelius Long", "Miriam Patterson",
  "Chester Hughes", "Josephine Flores", "Willard Washington", "Dorothea Butler", "Milo Ross",
  "Lavinia Henderson", "Jasper Coleman", "Cordelia Jenkins", "Roland Simmons", "Beatrice Foster",
  "Leopold Powell", "Evangeline Long", "Percy Patterson", "Millicent Hughes", "Archibald Flores",
  "Clementine Washington", "Barnaby Butler", "Seraphina Ross", "Mortimer Henderson", "Arabella Coleman",
  "Alistair Jenkins", "Celestine Simmons", "Winston Foster", "Calista Powell", "Ignatius Long",
  "Persephone Patterson", "Crispin Hughes", "Xiomara Flores", "Desmond Washington", "Isadora Butler",
  "Florian Ross", "Vivienne Henderson", "Ambrose Coleman", "Thessaly Jenkins", "Thaddeus Simmons",
  "Eulalia Foster", "Cyprian Powell", "Ottoline Long", "Leander Patterson", "Araminta Hughes",
  "Peregrine Flores", "Calliope Washington", "Sylvester Butler", "Petronella Ross", "Montgomery Henderson",
  "Sophronia Coleman", "Balthazar Jenkins", "Thessalonika Simmons", "Lysander Foster", "Cosima Powell",

  // South Indian Names
  "Aravind Krishnamurthy", "Savitha Venkataraman", "Balaji Raghavendra", "Champa Thiruvengadam",
  "Devanand Seshadri", "Eswari Annamalai", "Fanindra Sudarshan", "Gowri Venkateswaran",
  "Hariharan Ambalavanan", "Indumathi Kalyanaraman", "Janakiraman Srinivasan", "Kamakshi Parthasarathy",
  "Lakshminarayanan Rengasamy", "Malathi Sivasubramanian", "Narayanan Thirugnanam", "Omana Gopalakrishnan",
  "Parasuraman Chandrasekhar", "Quincy Ramanathan", "Ramamurthy Vaidyanathan", "Saravanan Muthusamy",
  "Tamilarasi Perumal", "Umarani Krishnaswami", "Venkataramaiah Narasimhan", "Vijayalakshmi Jayaraman",
  "Wariamma Kesavan", "Xandri Murugesan", "Yamuna Dakshinamurthy", "Zahra Abdulkader",
  "Alagammai Kuppusamy", "Bhuvaneswari Thiyagarajan",

  // North East Indian Names
  "Biren Sharma", "Chaoba Singha", "Debojit Das", "Elangbam Leima", "Fumiya Boro",
  "Gitali Kalita", "Hoibi Ngangbam", "Ibomcha Yumnam", "Joydip Phukan", "Khuraijam Sana",
  "Laishram Priya", "Moirangthem Anita", "Naorem Sunil", "Okram Devi", "Pangambam Rishi",
  "Rajkumar Nongmaithem", "Saratchandra Wangkheimayum", "Thounaojam Ranjit", "Usham Lata", "Wahengbam Tombi",

  // International/Diverse
  "Chen Wei", "Yuki Tanaka", "Carlos Rodriguez", "Maria Santos", "Ahmed Al-Hassan",
  "Fatima Al-Zahra", "Ivan Petrov", "Anastasia Volkov", "Kwame Asante", "Amara Diallo",
  "Sebastien Moreau", "Camille Dubois", "Giuseppe Ferrari", "Valentina Romano", "Lars Eriksson",
  "Ingrid Nilsson", "Pawel Kowalski", "Agnieszka Wisniewska", "Mehmet Yilmaz", "Elif Demir",
  "Javier Fernandez", "Lucia Garcia", "Patrick O'Brien", "Siobhan Murphy", "Hamid Mohammadi",
  "Nasrin Hosseini", "Yaw Darko", "Ama Owusu", "Rajendra Prasad", "Sunita Rawat",
  "Deepa Menon", "Krishnamurthy Aiyar", "Subbalakshmi Naidu", "Venkatraman Iyengar", "Satyanarayana Murthy",

  // More mixed
  "Shubham Mishra", "Tanisha Roy", "Kartik Nandan", "Ishita Banerjee", "Piyush Das",
  "Shreyasi Chakraborty", "Abhinav Ghosh", "Debasmita Sen", "Saumya Mondal", "Biswajit Dey",
  "Nilanjana Mukherjee", "Sourav Mandal", "Rupa Sarkar", "Tapas Saha", "Barnali Biswas",
  "Subhasis Paul", "Susmita Hazra", "Debdutta Naskar", "Parna Roy", "Anirban Chatterjee",
  "Oliver Bennett", "Sophia Clarke", "George Mitchell", "Isabelle Turner", "Harry Evans",
  "Poppy Wright", "Alfie Walker", "Lily Robinson", "Freddie Thompson", "Rosie White",
  "Archie Harris", "Daisy Martin", "Toby Jackson", "Phoebe Lewis", "Reuben Lee",
  "Imogen Walker", "Theodore Hughes", "Florence Green", "Sebastian Adams", "Matilda Baker",
  "Alec Morrison", "Fiona Campbell", "Callum Stewart", "Morag MacLeod", "Hamish Robertson",
  "Catriona Fraser", "Ewan MacKenzie", "Eilidh Murray", "Ruaraidh MacDonald", "Seonaid Ross",
  "Conor O'Sullivan", "Niamh McCarthy", "Ciara Flynn", "Declan Walsh", "Aoife Burke",
  "Roisin Brennan", "Eoin Doyle", "Sinead Kelly", "Cillian Ryan", "Grainne Connolly",
  "Matteo Ricci", "Francesca Russo", "Marco Esposito", "Sofia Conti", "Luca Bianchi",
  "Emma Ferrari", "Lorenzo Marino", "Giulia Romano", "Alessandro Costa", "Chiara Gallo",
  "Lukas Müller", "Hannah Schmidt", "Felix Schneider", "Mia Fischer", "Leon Weber",
  "Emilia Meyer", "Jonas Wagner", "Lena Becker", "Noah Schulz", "Sophie Hoffmann",
  "Lucas Bernard", "Manon Petit", "Hugo Durand", "Inès Leroy", "Axel Moreau",
  "Jade Simon", "Tom Laurent", "Léa Michel", "Tom Lefebvre", "Camille David",
  "Hiroshi Yamamoto", "Sakura Watanabe", "Takeshi Suzuki", "Yumi Kobayashi", "Kenji Ito",
  "Aiko Saito", "Ryo Yamada", "Nana Hayashi", "Shota Kimura", "Mio Matsumoto",
  "Wei Zhang", "Fang Li", "Ming Wang", "Ying Liu", "Hao Chen",
  "Xiao Yang", "Jing Zhao", "Bo Huang", "Qian Zhou", "Yu Wu",
  "Sofia Andersson", "Axel Johansson", "Ella Karlsson", "William Nilsson", "Alma Eriksson",
  "Victor Larsson", "Astrid Olsson", "Hugo Persson", "Maja Svensson", "Liam Gustafsson",
  "Rania Hassan", "Omar Khalid", "Layla Ibrahim", "Yasmine Ahmed", "Karim Mostafa",
  "Nour El-Din", "Sami Aziz", "Hala Mansour", "Tariq Nasser", "Dina Samir",
  "Preethi Govindarajan", "Sudhakar Raghunathan", "Ambika Thyagarajan", "Rajagopalan Venkatesh", "Geetha Lakshmanan",
  "Sriram Chandrasekhar", "Mahalakshmi Suresh", "Vignesh Murugan", "Mythili Rajan", "Karthi Kumaran",
  "Deepika Padukone", "Ranveer Singh", "Katrina Kaif", "Siddharth Malhotra", "Alia Bhatt",
  "Varun Dhawan", "Anushka Sharma", "Ranbir Kapoor", "Shraddha Kapoor", "Tiger Shroff",
];

export const AVATAR_COLORS = [
  '#1a73e8', '#ea4335', '#34a853', '#fbbc04', '#9c27b0',
  '#e91e63', '#00bcd4', '#ff5722', '#795548', '#607d8b',
  '#3f51b5', '#009688', '#8bc34a', '#ffc107', '#ff9800',
  '#f44336', '#673ab7', '#2196f3', '#4caf50', '#cddc39',
];

export const TILE_GRADIENTS = [
  'linear-gradient(135deg, #1a237e 0%, #283593 100%)',
  'linear-gradient(135deg, #004d40 0%, #00695c 100%)',
  'linear-gradient(135deg, #4a148c 0%, #6a1b9a 100%)',
  'linear-gradient(135deg, #b71c1c 0%, #c62828 100%)',
  'linear-gradient(135deg, #e65100 0%, #ef6c00 100%)',
  'linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)',
  'linear-gradient(135deg, #01579b 0%, #0277bd 100%)',
  'linear-gradient(135deg, #37474f 0%, #455a64 100%)',
  'linear-gradient(135deg, #880e4f 0%, #ad1457 100%)',
  'linear-gradient(135deg, #006064 0%, #00838f 100%)',
  'linear-gradient(135deg, #f57f17 0%, #f9a825 100%)',
  'linear-gradient(135deg, #33691e 0%, #558b2f 100%)',
  'linear-gradient(135deg, #1565c0 0%, #1976d2 100%)',
  'linear-gradient(135deg, #4527a0 0%, #512da8 100%)',
  'linear-gradient(135deg, #bf360c 0%, #d84315 100%)',
];

export function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

export function getAvatarColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

export function getTileGradient(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return TILE_GRADIENTS[Math.abs(hash) % TILE_GRADIENTS.length];
}

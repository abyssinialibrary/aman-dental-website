// aman-dental/src/utils/data.js (UPDATED with Blog Data & Nav Link)

export const clinicInfo = {
  name: "Aman Dental",
  tagline: "Your Brightest Smile Starts Here: Expert Dental Care in Addis Ababa.",
  missionStatement: "At Aman Dental, our mission is to provide compassionate, high-quality dental care to the community of Addis Ababa. We believe in building lasting relationships with our patients, ensuring comfort, trust, and healthy smiles for life. We are dedicated to creating a welcoming environment where every patient feels valued and receives personalized treatment.",
  address: "Bole Road, Near Friendship Park, Addis Ababa, Ethiopia",
  phone: "+251 118 70 5000",
  email: "info@amandental.com",
  hours: "Mon-Fri: 9 AM - 6 PM | Sat: 10 AM - 3 PM | Sun: Closed",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.0683675005853!2d38.79092497500732!3d8.99597148906969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85d301f22b7d%3A0xc3f282470765c928!2sFriendship%20Park!5e0!3m2!1sen!2set!4v1701234567890!5m2!1sen!2set"
  // Note: This is a placeholder for Friendship Park. Replace with actual clinic coordinates if available.
};

export const socialLinks = {
  facebook: "#facebook", // Placeholder
  instagram: "#instagram", // Placeholder
  linkedin: "#linkedin" // Placeholder
};

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" }, // NEW BLOG LINK
  { name: "Contact Us", path: "/contact" },
];

export const services = [
  {
    id: "general-dentistry",
    name: "General Dentistry",
    description: "Comprehensive check-ups, cleanings, and preventative care to maintain your oral health and prevent future issues.",
    icon: "fa-tooth", // FontAwesome icon class
    fullDescription: "Our general dentistry services are the foundation of good oral health. We offer routine examinations, professional cleanings, fluoride treatments, and fillings. Our goal is to detect and address dental problems early, ensuring your smile remains healthy and vibrant for years to come. Regular check-ups are essential for preventing common dental problems such as cavities and gum disease. We emphasize patient education, helping you understand the best practices for at-home oral hygiene. From digital X-rays for accurate diagnostics to personalized treatment plans, we use advanced technology to provide efficient and comfortable care. Trust Aman Dental for all your family's general dental needs, ensuring a lifetime of healthy smiles."
  },
  {
    id: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    description: "Enhance your smile with teeth whitening, veneers, and bonding for a confident, radiant look.",
    icon: "fa-grin-alt",
    fullDescription: "Achieve the smile of your dreams with our cosmetic dentistry options. From professional teeth whitening to brighten your enamel, to custom veneers that reshape and perfect your teeth, and subtle bonding procedures, we help you achieve a stunning and natural-looking smile. Our cosmetic dental treatments are designed to improve the appearance of your teeth and gums, enhancing your overall facial aesthetics. Whether you're looking for a dramatic transformation or subtle enhancements, our experienced cosmetic dentists use the latest techniques and materials to deliver outstanding results. We offer personalized consultations to understand your aesthetic goals and create a treatment plan that's right for you. Rediscover your confidence with a dazzling smile from Aman Dental."
  },
  {
    id: "orthodontics",
    name: "Orthodontics",
    description: "Straighten your teeth with braces and clear aligners tailored to your unique needs and lifestyle.",
    icon: "fa-brackets-curly",
    fullDescription: "Our orthodontic treatments are designed to correct misaligned teeth and bite issues, improving both aesthetics and oral function. We offer a range of solutions including traditional braces and modern clear aligners, customized to help you achieve a beautifully straight smile. Proper tooth alignment is not just about appearance; it's vital for healthy chewing, speaking, and preventing excessive wear on teeth. Our orthodontic specialists provide thorough evaluations and create individualized treatment plans for children, teens, and adults. With discreet options like clear aligners, achieving a perfect smile has never been more convenient. Invest in your smile and oral health with orthodontic care at Aman Dental."
  },
  {
    id: "dental-implants",
    name: "Dental Implants",
    description: "Restore missing teeth with durable, natural-looking dental implants for a complete and functional smile.",
    icon: "fa-implant",
    fullDescription: "Dental implants are a permanent and effective solution for replacing missing teeth. Our experts provide precise implant placement, offering you a durable, natural-looking tooth replacement that restores chewing function and enhances your facial aesthetics. Implants are designed to fuse with your bone, providing a stable foundation for artificial teeth that look, feel, and function like your own. They can replace a single tooth, multiple teeth, or support a full set of dentures. With a high success rate and long-lasting results, dental implants are an excellent investment in your oral health and quality of life. Consult with Aman Dental to see if dental implants are right for you."
  },
  {
    id: "pediatric-dentistry",
    name: "Pediatric Dentistry",
    description: "Gentle and friendly dental care specifically designed for our youngest patients, ensuring a positive experience.",
    icon: "fa-child",
    fullDescription: "We believe in making dental visits fun and fear-free for children. Our pediatric dentistry services focus on preventative care, early detection of issues, and education for both children and parents, laying the groundwork for a lifetime of healthy smiles. Our child-friendly environment and compassionate team help alleviate dental anxiety, making each visit a positive experience. We offer services like fluoride treatments, sealants, and cavity fillings tailored to children's needs, as well as guidance on proper brushing and flossing techniques. Start your child's journey to optimal oral health with the expert pediatric dental team at Aman Dental."
  },
];

export const teamMembers = [
  {
    name: "Dr. Sofia Ahmed",
    role: "Lead Dentist",
    bio: "With over 15 years of experience, Dr. Ahmed is passionate about creating healthy, beautiful smiles for her patients. She is committed to continuous learning and integrating the latest dental techniques.",
    image: "/images/team-dr-sofia.jpg" // Placeholder image
  },
  {
    name: "Dr. Elias Bekele",
    role: "Orthodontist",
    bio: "Dr. Bekele specializes in orthodontic treatments, helping patients of all ages achieve perfectly aligned teeth and confident smiles. He's known for his meticulous approach and friendly demeanor.",
    image: "/images/team-dr-elias.jpg" // Placeholder image
  },
  {
    name: "Nurse Almaz Kebede",
    role: "Dental Hygienist",
    bio: "Almaz ensures every patient feels comfortable and informed, providing top-notch preventative care and support. Her gentle touch makes dental cleanings a breeze.",
    image: "/images/team-nurse-almaz.jpg" // Placeholder image
  }
];

export const testimonials = [
  {
    quote: "Aman Dental transformed my smile! The team is incredibly caring and professional. Highly recommend their services to everyone in Addis.",
    name: "Selamawit K."
  },
  {
    quote: "Finding a reliable dentist in Addis was a challenge until Aman Dental. Their service is exceptional, and the clinic is spotless. Truly impressed!",
    name: "Dawit G."
  },
  {
    quote: "My kids actually look forward to their dental check-ups now! The gentle approach at Aman Dental makes all the difference. They're amazing with children.",
    name: "Aster M."
  }
];

export const blogPosts = [
  {
    slug: "importance-of-regular-checkups",
    title: "The Importance of Regular Dental Check-ups",
    date: "2024-01-15",
    author: "Dr. Sofia Ahmed",
    category: "Preventative Care",
    summary: "Discover why consistent dental check-ups are essential for maintaining oral health and preventing serious issues. Early detection is key!",
    image: "/images/blog-img-1.jpg", // Unsplash placeholder
    content: `
      <p>Regular dental check-ups are often underestimated, but they play a crucial role in maintaining not just your oral health, but your overall well-being. Many people only visit the dentist when they experience pain or discomfort, missing out on the significant benefits of preventative care.</p>
      <h3>Why Consistency Matters</h3>
      <p>During a routine check-up, your dentist doesn't just look for cavities. They perform a comprehensive examination of your entire mouth, including your gums, tongue, and throat. This allows for early detection of potential issues such as:</p>
      <ul>
        <li><strong>Cavities:</strong> Catching them early prevents them from growing larger and requiring more extensive treatments.</li>
        <li><strong>Gum Disease:</strong> Often painless in its early stages, gum disease can lead to tooth loss if left untreated. Regular cleanings remove plaque and tartar buildup.</li>
        <li><strong>Oral Cancer:</strong> Dentists are trained to spot early signs of oral cancer, which significantly increases treatment success rates.</li>
        <li><strong>Other Health Issues:</strong> Your mouth can show signs of systemic diseases like diabetes, heart disease, and even some autoimmune conditions.</li>
      </ul>
      <h3>Preventative Measures</h3>
      <p>Beyond detection, check-ups include professional cleanings that remove stubborn plaque and tartar that brushing and flossing at home can't reach. Your dentist can also provide personalized advice on oral hygiene techniques, dietary recommendations, and fluoride treatments or sealants if necessary.</p>
      <p>At Aman Dental, we recommend scheduling a check-up every six months. This proactive approach saves you time, discomfort, and potentially higher costs in the long run. Invest in your smile, and it will serve you well for a lifetime.</p>
    `
  },
  {
    slug: "whitening-for-a-brighter-smile",
    title: "Teeth Whitening: Achieve a Brighter, More Confident Smile",
    date: "2024-02-01",
    author: "Dr. Elias Bekele",
    category: "Cosmetic Dentistry",
    summary: "Explore the benefits and methods of professional teeth whitening to enhance your smile and boost your confidence.",
    image: "/images/blog-img-2.jpg", // Unsplash placeholder
    content: `
      <p>A bright, white smile can significantly boost your confidence and leave a lasting impression. Over time, teeth can become discolored due to various factors, including coffee, tea, red wine, tobacco use, and natural aging. Professional teeth whitening offers a safe and effective solution to restore your smile's radiance.</p>
      <h3>Understanding Teeth Whitening Options</h3>
      <p>At Aman Dental, we offer advanced teeth whitening options tailored to your needs:</p>
      <ul>
        <li><strong>In-Office Whitening:</strong> This is the fastest method, delivering dramatic results in a single visit. A high-concentration whitening gel is applied to your teeth, often activated by a special light, to lighten your smile by several shades in about an hour.</li>
        <li><strong>At-Home Whitening Kits:</strong> We provide custom-fitted trays and professional-grade whitening gel for you to use comfortably at home. This method allows for gradual whitening over a period of days or weeks, offering flexibility while still achieving excellent results.</li>
      </ul>
      <h3>Is Teeth Whitening Right For You?</h3>
      <p>While teeth whitening is safe for most individuals, a consultation with your dentist is essential to determine if you are a good candidate. Factors such as existing dental work (crowns, fillings won't whiten), gum health, and tooth sensitivity will be considered.</p>
      <p>Achieve the dazzling smile you've always wanted. Contact Aman Dental today to discuss your teeth whitening options and embark on your journey to a brighter, more confident you.</p>
    `
  },
  {
    slug: "kids-first-dental-visit",
    title: "Preparing Your Child for Their First Dental Visit",
    date: "2024-02-15",
    author: "Nurse Almaz Kebede",
    category: "Pediatric Dentistry",
    summary: "Make your child's first dental visit a positive experience with these tips for parents.",
    image: "/images/blog-img-3.jpg", // Unsplash placeholder
    content: `
      <p>A child's first dental visit sets the stage for a lifetime of oral health habits. Making this experience positive and anxiety-free is paramount. At Aman Dental, we strive to create a welcoming and fun environment for our youngest patients, but parents also play a crucial role in preparation.</p>
      <h3>Tips for a Successful First Visit</h3>
      <ul>
        <li><strong>Start Early:</strong> The American Academy of Pediatric Dentistry recommends a child's first dental visit by age one, or within six months after their first tooth erupts. Early visits focus on education and prevention.</li>
        <li><strong>Keep it Positive:</strong> Avoid using words like "shot," "pain," or "drill." Instead, use positive language such as "healthy smile," "strong teeth," and "tooth fairy visit."</li>
        <li><strong>Read Books:</strong> There are many excellent children's books about going to the dentist. Reading them together can help familiarize your child with the experience.</li>
        <li><strong>Practice Role-Playing:</strong> Pretend to be the dentist at home. Count your child's teeth, and let them "examine" yours.</li>
        <li><strong>Schedule Wisely:</strong> Choose a time when your child is well-rested and generally cooperative, often in the morning.</li>
        <li><strong>Be a Good Role Model:</strong> Let your child see you brushing and flossing regularly, and talk positively about your own dental visits.</li>
      </ul>
      <h3>What to Expect</h3>
      <p>During the first visit, the dentist will gently examine your child's teeth and gums, check for proper development, and discuss oral hygiene techniques. It's also an opportunity for parents to ask questions about diet, pacifier use, and thumb-sucking. Our goal is to make every child's visit to Aman Dental a happy and comfortable one, fostering a positive attitude towards dental care from a young age.</p>
    `
  },
  {
    slug: "understanding-dental-implants",
    title: "Understanding Dental Implants: A Permanent Solution for Missing Teeth",
    date: "2024-03-01",
    author: "Dr. Sofia Ahmed",
    category: "Restorative Dentistry",
    summary: "Learn about dental implants, how they work, and why they are considered the gold standard for replacing missing teeth.",
    image: "/images/blog-img-4.jpg", // Unsplash placeholder
    content: `
      <p>Losing a tooth can impact your smile, chewing ability, and overall oral health. Dental implants offer a revolutionary and permanent solution to replace missing teeth, providing a strong foundation for artificial teeth that look, feel, and function like your own.</p>
      <h3>What are Dental Implants?</h3>
      <p>A dental implant is a small, screw-shaped post, usually made of titanium, that is surgically placed into the jawbone beneath the gum line. This implant acts as an artificial tooth root. Over time, the implant fuses with the bone (a process called osseointegration), providing a stable and durable base. Once healed, an abutment (a small connector) is attached to the implant, and a custom-made crown is then placed on top.</p>
      <h3>Benefits of Dental Implants</h3>
      <ul>
        <li><strong>Natural Look and Feel:</strong> Implants are designed to blend seamlessly with your natural teeth.</li>
        <li><strong>Improved Functionality:</strong> They restore full chewing power, allowing you to eat your favorite foods without discomfort.</li>
        <li><strong>Preserve Bone Structure:</strong> Implants stimulate the jawbone, preventing bone loss that typically occurs after tooth extraction.</li>
        <li><strong>Long-Lasting:</strong> With proper care, dental implants can last a lifetime.</li>
        <li><strong>Enhanced Confidence:</strong> A complete, natural-looking smile can significantly boost self-esteem.</li>
      </ul>
      <h3>The Implant Procedure</h3>
      <p>The process typically involves several stages, including a thorough consultation, implant placement surgery, a healing period, abutment attachment, and finally, crown placement. Our experienced team at Aman Dental utilizes advanced technology and precise techniques to ensure a comfortable and successful implant procedure.</p>
      <p>If you have missing teeth and are looking for a long-term, effective solution, dental implants may be the right choice for you. Schedule a consultation with us to determine your eligibility and discuss a personalized treatment plan.</p>
    `
  },
  {
    slug: "gum-health-tips",
    title: "Essential Tips for Maintaining Healthy Gums",
    date: "2024-03-15",
    author: "Nurse Almaz Kebede",
    category: "Preventative Care",
    summary: "Healthy gums are crucial for a healthy smile. Learn practical tips to prevent gum disease and keep your gums in top condition.",
    image: "/images/blog-img-5.jpg", // Unsplash placeholder
    content: `
      <p>While much attention is given to teeth, your gums are the foundation of a healthy smile. Neglecting gum health can lead to gingivitis (early gum disease) and eventually periodontitis (advanced gum disease), which can cause tooth loss and impact your overall health.</p>
      <h3>Signs of Unhealthy Gums</h3>
      <p>Be aware of these common symptoms:</p>
      <ul>
        <li>Red, swollen, or tender gums</li>
        <li>Gums that bleed easily during brushing or flossing</li>
        <li>Receding gums (teeth appear longer)</li>
        <li>Persistent bad breath</li>
        <li>Pus between teeth and gums</li>
        <li>Loose or shifting teeth</li>
      </ul>
      <h3>Simple Steps for Healthy Gums</h3>
      <ol>
        <li><strong>Brush Twice Daily:</strong> Use a soft-bristled toothbrush and fluoride toothpaste. Angle the brush at 45 degrees to the gum line and use gentle, circular motions.</li>
        <li><strong>Floss Daily:</strong> Flossing removes plaque and food particles from between teeth and under the gum line, areas your toothbrush can't reach.</li>
        <li><strong>Use Mouthwash:</strong> An antiseptic mouthwash can help reduce bacteria that cause plaque and gum disease.</li>
        <li><strong>Eat a Balanced Diet:</strong> Limit sugary foods and drinks that contribute to plaque formation. A diet rich in vitamins and minerals supports overall oral health.</li>
        <li><strong>Avoid Tobacco:</strong> Smoking and chewing tobacco significantly increase the risk and severity of gum disease.</li>
        <li><strong>Regular Dental Check-ups:</strong> Professional cleanings and examinations are vital for removing hardened plaque (tartar) and detecting early signs of gum problems.</li>
      </ol>
      <p>Maintaining healthy gums is a team effort between you and your dental care team. By following these essential tips and visiting Aman Dental regularly, you can prevent gum disease and enjoy a strong, beautiful smile for years to come.</p>
    `
  }
];
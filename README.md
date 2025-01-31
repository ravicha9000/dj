<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ElectroBeat Events - DJ & Lighting Services</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
        }

        body {
            background-color: #0a0a0a;
            color: #ffffff;
            line-height: 1.6;
        }

        /* Navigation */
        .navbar {
            background-color: rgba(0, 0, 0, 0.8);
            padding: 20px;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .navbar .logo {
            font-size: 1.5em;
            font-weight: bold;
            color: #ff00ff;
        }

        .navbar .nav-links {
            display: flex;
            align-items: center;
        }

        .navbar a {
            color: #ffffff;
            text-decoration: none;
            margin: 0 20px;
            font-size: 1.1em;
            transition: color 0.3s;
        }

        .navbar a:hover {
            color: #ff00ff;
        }

        .navbar .menu-icon {
            display: none;
            font-size: 1.5em;
            cursor: pointer;
        }

        @media (max-width: 768px) {
            .navbar .nav-links {
                display: none;
                flex-direction: column;
                width: 100%;
                background-color: rgba(0, 0, 0, 0.9);
            }

            .navbar .nav-links.active {
                display: flex;
            }

            .navbar .menu-icon {
                display: block;
            }
        }

        /* Hero Section with Video Background */
        .hero {
            height: 100vh;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }

        .hero video {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: translate(-50%, -50%);
            z-index: -1;
        }

        .hero h1 {
            font-size: 4em;
            margin-bottom: 20px;
            text-transform: uppercase;
        }

        .hero p {
            font-size: 1.2em;
            margin-bottom: 30px;
        }

        .hero button {
            background: #ff00ff;
            color: white;
            padding: 15px 40px;
            border: none;
            cursor: pointer;
            font-size: 1.1em;
            transition: background 0.3s;
        }

        .hero button:hover {
            background: #cc00cc;
        }

        /* Services Section */
        .services {
            padding: 80px 20px;
            text-align: center;
            background: #1a1a1a;
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-top: 50px;
        }

        .service-card {
            background: #0a0a0a;
            padding: 30px;
            border-radius: 10px;
            transition: transform 0.3s;
        }

        .service-card:hover {
            transform: translateY(-10px);
        }

        .service-card i {
            font-size: 2em;
            margin-bottom: 20px;
            color: #ff00ff;
        }

        /* Testimonials Section */
        .testimonials {
            padding: 80px 20px;
            text-align: center;
        }

        .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-top: 50px;
        }

        .testimonial-card {
            background: #1a1a1a;
            padding: 30px;
            border-radius: 10px;
        }

        .testimonial-card img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin-bottom: 20px;
        }

        /* Pricing Section */
        .pricing {
            padding: 80px 20px;
            text-align: center;
            background: #1a1a1a;
        }

        .pricing-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            margin-top: 50px;
        }

        .pricing-card {
            background: #0a0a0a;
            padding: 30px;
            border-radius: 10px;
        }

        .pricing-card h3 {
            font-size: 1.5em;
            margin-bottom: 20px;
        }

        .pricing-card .price {
            font-size: 2em;
            color: #ff00ff;
            margin-bottom: 20px;
        }

        /* Contact Section with Google Maps */
        .contact {
            padding: 80px 20px;
            text-align: center;
        }

        .contact-form {
            max-width: 600px;
            margin: 50px auto;
        }

        input, textarea {
            width: 100%;
            padding: 15px;
            margin: 10px 0;
            background: #1a1a1a;
            border: none;
            color: white;
        }

        button {
            background: #ff00ff;
            color: white;
            padding: 15px 40px;
            border: none;
            cursor: pointer;
            font-size: 1.1em;
            transition: background 0.3s;
        }

        button:hover {
            background: #cc00cc;
        }

        .map-container {
            margin-top: 50px;
            height: 400px;
            background: #1a1a1a;
        }

        /* Footer */
        footer {
            background: #000000;
            padding: 40px 20px;
            text-align: center;
        }

        footer .social-icons {
            margin-bottom: 20px;
        }

        footer .social-icons a {
            color: #ffffff;
            margin: 0 10px;
            font-size: 1.5em;
            transition: color 0.3s;
        }

        footer .social-icons a:hover {
            color: #ff00ff;
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="logo">ElectroBeat Events</div>
        <div class="menu-icon" onclick="toggleMenu()">&#9776;</div>
        <div class="nav-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
        </div>
    </nav>

    <section class="hero" id="home">
        <video autoplay muted loop>
            <source src="dj-video.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div>
            <h1>ElectroBeat Events</h1>
            <p>Premium DJ & Lighting Services for Unforgettable Experiences</p>
            <button>Book Now</button>
        </div>
    </section>

    <section class="services" id="services">
        <h2>Our Services</h2>
        <div class="services-grid">
            <div class="service-card">
                <i class="fas fa-music"></i>
                <h3>DJ Services</h3>
                <p>Professional DJs for weddings, corporate events, and parties.</p>
            </div>
            <div class="service-card">
                <i class="fas fa-lightbulb"></i>
                <h3>Lighting Solutions</h3>
                <p>Custom lighting designs including LED walls, dance floors, and effects.</p>
            </div>
            <div class="service-card">
                <i class="fas fa-calendar-alt"></i>
                <h3>Full Event Production</h3>
                <p>Complete event management with sound and visual systems.</p>
            </div>
        </div>
    </section>

    <section class="testimonials" id="testimonials">
        <h2>What Our Clients Say</h2>
        <div class="testimonials-grid">
            <div class="testimonial-card">
                <img src="client1.jpg" alt="Client 1">
                <p>"ElectroBeat made our wedding unforgettable! The music and lighting were perfect."</p>
                <h4>- Sarah & John</h4>
            </div>
            <div class="testimonial-card">
                <img src="client2.jpg" alt="Client 2">
                <p>"The best DJ service we've ever experienced. Highly recommended!"</p>
                <h4>- Mike</h4>
            </div>
            <div class="testimonial-card">
                <img src="client3.jpg" alt="Client 3">
                <p>"Their lighting setup transformed our event into a magical experience."</p>
                <h4>- Emily</h4>
            </div>
        </div>
    </section>

    <section class="pricing" id="pricing">
        <h2>Pricing Packages</h2>
        <div class="pricing-grid">
            <div class="pricing-card">
                <h3>Basic</h3>
                <div class="price">$500</div>
                <p>DJ Services</p>
                <p>Basic Lighting</p>
                <p>4 Hours</p>
            </div>
            <div class="pricing-card">
                <h3>Standard</h3>
                <div class="price">$800</div>
                <p>DJ Services</p>
                <p>Advanced Lighting</p>
                <p>6 Hours</p>
            </div>
            <div class="pricing-card">
                <h3>Premium</h3>
                <div class="price">$1200</div>
                <p>DJ Services</p>
                <p>Full Lighting & Effects</p>
                <p>8 Hours</p>
            </div>
        </div>
    </section>

    <section class="contact" id="contact">
        <h2>Contact Us</h2>
        <form class="contact-form">
            <input type="text" placeholder="Name" required>
            <input type="email" placeholder="Email" required>
            <input type="date" required>
            <textarea placeholder="Event Details" rows="5" required></textarea>
            <button type="submit">Send Inquiry</button>
        </form>
        <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.9537353153166!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2d2f2f1c3b4!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1622549402999!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    </section>

    <footer>
        <div class="social-icons">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
        </div>
        <p>© 2023 ElectroBeat Events. All rights reserved.</p>
    </footer>

    <script>
        function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        }

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    </script>
</body>
</html>

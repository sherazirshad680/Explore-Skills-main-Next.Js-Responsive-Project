import Image from 'next/image'
import styles from "./page.module.css"
import Link from 'next/link'
import { readConfigFile } from 'typescript'

export default function blog() {

    return (
        <>
            <section className="Sub-header">
                <nav>
                    <Link href="index.html" className="logo">Xplore
                        <i className="fab fa-staylinked"></i>kill
                    </Link>
                    <div className="nav-links" id="navLinks">
                        {/* <!-- reposnive bar open and close --> */}
                        <i className="fa fa-times"></i>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/course">Course</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <i className="fa fa-bars" ></i>
                    {/* <!-- reposnive bar open and close --> */}
                </nav>
                <h1>Our Post</h1>
            </section>

            {/* <!-- Blog Page Section Start --> */}

            <section className="blog-content">
                <div className="row">
                    <div className="blog-left">
                        <h2>Our Certificate & Online Program</h2>
                        <h5>Aug 1, 2021</h5>
                        <img src="img/post.png" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor consequatur, nobis quae
                            obcaecati delectus at aspernatur, placeat quasi iure mollitia. Repellendus a ut nostrum dolore velit
                            odit cumque, quos doloribus sint id aperiam eius aliquam quo modi sequi rem quia exercitationem
                            laborum, ratione expedita! Deleniti velit officia incidunt illum.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt
                            incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo,
                            aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde
                            ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio
                            facilis?</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt
                            incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo,
                            aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde
                            ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio
                            facilis?</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt
                            incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo,
                            aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde
                            ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio
                            facilis?</p>

                        <div className="comment-box">
                            <h3>Leave a Comment</h3>
                            <form className="comment-form">
                                <input type="text" placeholder="Enter Name" required />
                                <input type="email" placeholder="Enter Email" required />
                                <textarea rows={5} placeholder="Your Comment"></textarea>
                                <button type="submit" className="hero_btn btn">POST COMMENT</button>
                            </form>
                        </div>
                    </div>

                    <div className="blog-right">
                        <h3>Post Categories</h3>
                        <div>
                            <span>Business Analytics</span>
                            <span>12</span>
                        </div>
                        <div>
                            <span>Machine Learning</span>
                            <span>29</span>
                        </div>
                        <div>
                            <span>Computer Science</span>
                            <span>15</span>
                        </div>
                        <div>
                            <span>Data Analytics</span>
                            <span>22</span>
                        </div>
                        <div>
                            <span>Full Stack</span>
                            <span>20</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Blog Page Section end --> */}

            {/* <!-- Footer Section start --> */}
            <section className="footer">
                <hr />
                <h4>About Us</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
                    <br /> Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae
                    dolorem.
                </p>

                <div className="icons">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin"></i>
                </div>
                <p>Made with <i className="fas fa-heart"></i> by <Link href="#">Sagar Developer</Link></p>
                <p>Copyright © 2021 <Link href="index.html">Xplore Skill</Link>. All Rights Reserved</p>
            </section>
            {/* <!-- Footer Section end --></br> */}

        </>
    )
}
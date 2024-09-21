import React from 'react'
import './application_css.css'
import Header from '../common/Header'
import Footer from '../common/Footer'

export default function Application() {
  return (
    <>
        <Header />

        <section className="applications-section">
            <div className="container">
                <h2>Applications of Artificial Intelligence</h2>
                <p>
                    Artificial Intelligence is transforming numerous industries, enabling faster decision-making, automation of complex processes, and enhancing human capabilities. Below are some key areas where AI is being applied today.
                </p>

                <div className="application">
                    <h3>Healthcare</h3>
                    <p>
                        AI is revolutionizing healthcare by enabling faster and more accurate diagnostics, personalized treatment plans, and predictive analytics for better patient care.
                    </p>
                </div>

                <div className="application">
                    <h3>Autonomous Vehicles</h3>
                    <p>
                        AI powers self-driving cars, allowing vehicles to navigate streets, avoid obstacles, and make real-time driving decisions without human intervention.
                    </p>
                </div>

                <div className="application">
                    <h3>Finance</h3>
                    <p>
                        In the financial sector, AI is used for fraud detection, algorithmic trading, credit scoring, and automating routine financial processes.
                    </p>
                </div>

                <div className="application">
                    <h3>Robotics</h3>
                    <p>
                        AI-driven robots are employed in manufacturing, agriculture, and other industries to automate repetitive tasks and improve productivity.
                    </p>
                </div>

                <div className="application">
                    <h3>Natural Language Processing</h3>
                    <p>
                        AI enables machines to understand, interpret, and respond to human language, leading to the development of chatbots, virtual assistants, and language translation systems.
                    </p>
                </div>

                <div className="application">
                    <h3>Retail</h3>
                    <p>
                        AI is enhancing the retail experience through personalized recommendations, inventory management, customer support, and demand forecasting.
                    </p>
                </div>

                <div className="application">
                    <h3>Entertainment</h3>
                    <p>
                        AI is transforming the entertainment industry by enabling content recommendation algorithms, visual effects creation, and immersive virtual experiences.
                    </p>
                </div>
            </div>
        </section>

        <Footer />
    </>
  )
}

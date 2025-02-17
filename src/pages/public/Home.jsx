import "~/assets/public/pages/home.css"
import BasicDemo from "../../components/example/BasicDemo"

export const Home = () => {
    return (
        <div>

            <div className="home">
                <div className="overlay">
                    <h1>Unlimited movies, TV shows, and more</h1>
                    <p>Starts at 70,000 đ. Cancel anytime.</p>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="email-signup">
                        <input type="email" placeholder="Email address" />
                        <button>Get Started →</button>
                    </div>
                </div>
            </div>
            {/* <BasicDemo /> */}
        </div>
    )
}
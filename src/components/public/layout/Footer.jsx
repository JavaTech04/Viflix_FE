import "~/assets/public/layout/footer.css"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>Questions? <a href="#">Contact us.</a></p>
                <div className="footer-links">
                    <div>
                        <a href="#">FAQ</a>
                        <a href="#">Investor Relations</a>
                        <a href="#">Privacy</a>
                        <a href="#">Speed Test</a>
                    </div>
                    <div>
                        <a href="#">Help Center</a>
                        <a href="#">Jobs</a>
                        <a href="#">Cookie Preferences</a>
                        <a href="#">Legal Notices</a>
                    </div>
                    <div>
                        <a href="#">Account</a>
                        <a href="#">Ways to Watch</a>
                        <a href="#">Corporate Information</a>
                        <a href="#">Only on Viflix</a>
                    </div>
                    <div>
                        <a href="#">Media Center</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Contact Us</a>
                    </div>
                </div>
                <div className="language-selector">
                    <select>
                        <option>English</option>
                        <option>Vietnamese</option>
                    </select>
                </div>
                <p>Viflix Vietnam</p>
            </div>
        </footer>
    );
}
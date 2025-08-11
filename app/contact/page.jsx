import { Card } from '../../components/card';

export const metadata = {
    title: 'Contact'
};

export default function ContactPage() {
    return (
        <div className="flex flex-col gap-6 sm:gap-12">
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl lg:text-7xl">
                    Contact Us
                </h1>
                <p className="text-lg opacity-70">
                    Get in touch with us. We'd love to hear from you!
                </p>
            </div>
            
            <div className="w-full max-w-2xl">
                <ContactForm />
            </div>
        </div>
    );
}

function ContactForm() {
    return (
        <Card title="Send us a message">
            <form
                name="contact"
                method="POST"
                data-netlify="true"
                className="text-black flex flex-col gap-4"
            >
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-white font-medium">
                        Name *
                    </label>
                    <input 
                        id="name"
                        name="name" 
                        type="text" 
                        required 
                        className="input input-bordered" 
                    />
                </div>
                
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-white font-medium">
                        Email *
                    </label>
                    <input 
                        id="email"
                        name="email" 
                        type="email" 
                        required 
                        className="input input-bordered" 
                    />
                </div>
                
                <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-white font-medium">
                        Subject
                    </label>
                    <input 
                        id="subject"
                        name="subject" 
                        type="text" 
                        className="input input-bordered" 
                    />
                </div>
                
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-white font-medium">
                        Message *
                    </label>
                    <textarea 
                        id="message"
                        name="message" 
                        required 
                        rows="6"
                        className="textarea textarea-bordered resize-none" 
                    />
                </div>
                
                <button className="btn btn-primary mt-2" type="submit">
                    Send Message
                </button>
            </form>
        </Card>
    );
}
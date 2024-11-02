import Form from '../components/Form';
import Quote from '../components/quote';

function ContactPage() {
    return(
        <div className='flex flex-col w-full bg-bg min-h-[100vh] w-full relative'>
        <Quote 
            Header="Contact"
            Body="I believe every message holds a story, a lesson, or an opportunity. Feel free to reach out!"
            HyperLink={"Get in Touch →"}
            Link="https://www.linkedin.com/in/bipul-adhikari/"
        />
        <div className="text-text flex flex-col md:flex-row">
            <Form />
        </div>
        </div>
    )
}

export default ContactPage;
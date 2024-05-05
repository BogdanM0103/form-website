import { useState } from 'react';

const Form = () => {
    
    // Define state variables to store form data
    const [formData, setFormData] = useState({
        firstName: '',
        secondName: '',
        email: '',
        phone: '',
        file: null
    });
    
    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Here you can perform actions with the form data
        console.log('Form submitted:', formData);

        // Reset the form after submission (optional)
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            file: null
        });
    };
    
    // Function to handle input changes and update state
    const handleChange = (event) => {
        const { name, value, files } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: files ? files[0] : value
        }));
    };

    return ( 
        <div className="container">
            <form onSubmit={ handleSubmit } action="" method="POST" encType="multipart/form-data">
                <div className="first-row">
                    <div className="first-name">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" value={ formData.firstName } onChange={ handleChange } />
                    </div>
                    <div className="second-name">
                        <label htmlFor="secondName">Second Name:</label>
                        <input type="text" id="secondName" name="secondName" value={ formData.secondName } onChange={ handleChange } />
                    </div>
                </div>
                <div className="second-row">
                    <div className="email">
                        <label htmlFor="email">EMail:</label>
                        <input type="text" id="email" name="email" value={ formData.email } onChange={ handleChange } />
                    </div>
                    <div className="phone">
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" id="phone" name="phone" value={ formData.phone } onChange={ handleChange } />
                    </div>
                </div>
                <div className="third-row">
                    <div className="file-upload">
                        <label htmlFor="file">Upload File:</label>
                        <input type="file" id="file" name="file" value={ formData.file } onChange={ handleChange } />
                    </div>
                    <div className="submit-button">
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
 
export default Form;
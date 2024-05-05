const Form = () => {
    return ( 
        <div className="container">
            <form action="">
                <div className="first-row">
                    <div className="first-name">
                        <label htmlFor="">First Name:</label>
                        <input type="text" />
                    </div>
                    <div className="second-name">
                        <label htmlFor="">Second Name:</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="second-row">
                    <div className="email">
                        <label htmlFor="">EMail:</label>
                        <input type="text" />
                    </div>
                    <div className="phone">
                        <label htmlFor="">Phone:</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="third-row">
                    <div className="file-upload">
                        <label htmlFor="">Upload File:</label>
                        <input type="file" />
                    </div>
                    <div className="submit-button">
                        <button>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
 
export default Form;
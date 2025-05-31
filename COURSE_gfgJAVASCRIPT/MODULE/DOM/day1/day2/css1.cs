/* General Styles */
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
}

/* Container Styling */
.container {
    background: white;
    padding: 20px;
    border: 2px solid black;
    border-radius: 8px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    width: 300px;
    text-align: center;
    margin-bottom: 20px;
}

/* Buttons Styling */
button {
    padding: 10px 20px;
    margin: 5px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    transition: 0.3s;
}

#startBtn {
    background-color: green;
    color: white;
    border: 2px solid black;
}

#stopBtn {
    background-color: red;
    color: white;
    border: 2px solid black;
}

#resumeBtn {
    background-color: blue;
    color: white;
    border: 2px solid black;
}

button:hover {
    opacity: 0.8;
    border: 2px solid white;
}

/* Status Text Styling */
#statusText {
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
    border: 2px dotted black;
    padding: 10px;
}

/* Input Styling */
.input {
    width: 100%;
    padding: 10px;
    border: 2px solid black;
    border-radius: 5px;
    font-size: 16px;
    background-color: #f9f9f9;
}

/* Box around divs */
div {
    border: 3px solid black;
    padding: 15px;
    margin: 10px;
    background-color: rgba(0, 0, 0, 0.05);
}

/* Box around paragraphs */
p {
    border: 2px solid gray;
    padding: 10px;
    background-color: #e0e0e0;
    border-radius: 5px;
    font-style: italic;
}
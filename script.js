
    const signupModal = new bootstrap.Modal(document.getElementById('signupModal'));
    const signUpButton = document.getElementById('butt');
    const closeModalButton = document.getElementById('closeModalBtn');

    // Add event listener for the "Sign Up" button
    signUpButton.addEventListener('click', () => {
        // Show the modal when the "Sign Up" button is clicked
        signupModal.show();
    });


         closeModalBtn.addEventListener('click', () => {
         // Close the modal when the button is clicked
         signupModal.hide();
         });

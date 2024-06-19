// document.addEventListener('DOMContentLoaded', () => {
//   // setTimeout(initializeForm, 4000); 
//   createFormButton(); 
//    console.log('DOMContentLoaded event fired');
//   // initializeForm();
// });

// function initializeForm() {
//     console.log('initializeForm called');
//   const scriptElement = document.querySelector('script[src="Form.js"]');

//   if (!scriptElement) {
//       console.error('Script element with src="Form.js" not found.');
//       return;
//   }

//   const path = scriptElement.getAttribute('path');
//   const courses = scriptElement.getAttribute('courses');
//   const styles = scriptElement.getAttribute('styles');
//   const logo = scriptElement.getAttribute('logo');
//   const contact = scriptElement.getAttribute('contact');
//   const customStylesheets = scriptElement.getAttribute('customStylesheets');
//   if (styles) {
//       const customStylesheet = document.querySelectorAll('link[rel="stylesheet"]');
//       if (customStylesheet > 0) {
//           const styleLink = document.createElement('link');
//           styleLink.rel = 'stylesheet';
//           styleLink.href = "testStyle.css";
//           document.head.prepend(styleLink);
//       } else {
//           const styleLink = document.createElement('link');
//           styleLink.rel = 'stylesheet';
//           styleLink.href = "style.css";
//           document.head.prepend(styleLink);
//       }
//   }
//   if (!path || !courses) {
//       console.error('Custom data attribute not found in script element.');
//       return;
//   }

//   const currentPath = window.location.pathname;
// console.log('Current path:', currentPath);
//   try {
//       if (JSON.parse(path).includes(currentPath)) {
//           console.log('Path matches, creating form'); // Debugging log
//           createForm(courses, styles, logo, contact);
//           toggleFormStyle(styles);
//       } else {
//           console.log('Path does not match'); // Debugging log
//       }
//   } catch (e) {
//       console.error('Error parsing path attribute:', e);
//   }
// }

// function createFormButton() {
//   const button = document.createElement('button');
//   button.textContent = 'Open Form';
//   button.addEventListener('click', () => {
//        console.log('Form button clicked');
//       initializeForm();
//       button.style.display = 'none'; 
//   });
//   document.body.appendChild(button);
// }
// function createForm(courseOptions, styles, logo, contact) {
//     // const form = document.createElement('form');
//     // form.id = 'studentDetailsForm';
//     // document.body.appendChild(form);
//     // const overlay = document.createElement('div');
//     // overlay.classList.add('overlay');
//     // document.body.appendChild(overlay);
//     const formContainer = document.createElement('div');
//     formContainer.id = 'formContainer';
//     // formContainer.classList.add(styles);
//     formContainer.classList.add('form-container'); 
//     // formContainer.style.backgroundColor = 'blue';
//     document.body.appendChild(formContainer);
    
//     const header = document.createElement('div');
// header.classList.add('formWrapper');
// formContainer.insertBefore(header, formContainer.firstChild);
// const logoAndContactContainer = document.createElement('div');
// logoAndContactContainer.classList.add('logo-contact-container');
// header.appendChild(logoAndContactContainer);


// const logoElement = document.createElement('img');
// logoElement.src = logo || 'Careerkick.png'; 
// logoElement.alt = 'Company Logo';
// logoElement.classList.add('logo-style'); 
// logoAndContactContainer.appendChild(logoElement);


// const contactElement = document.createElement('div');
// contactElement.textContent = 'Contact us: ' + contact; 
// contactElement.classList.add('contact-style'); 
// logoAndContactContainer.appendChild(contactElement);
//     const form = document.createElement('form');
//     form.id = 'studentDetailsForm';
//     form.classList.add('formWrapper');
//     formContainer.appendChild(form);
   
//     const fieldOptions = [
//         { placeholder: "Student's Name:", inputType: 'text', inputId: 'studentName', inputName: 'studentName', required: true },
//         { placeholder: "Father's Name:", inputType: 'text', inputId: 'fatherName', inputName: 'fatherName', required: true },
//         { placeholder: 'Contact No.:', inputType: 'tel', inputId: 'contactNo', inputName: 'contactNo', required: true },
//         { placeholder: 'OTP:', inputType: 'tel', inputId: 'contactNo', inputName: 'contactNo', required: true },
//         { placeholder: 'E-mail:', inputType: 'email', inputId: 'email', inputName: 'email', required: true },
//         // { placeholder: 'OTP:', inputType: 'tel', inputId: 'contactNo', inputName: 'contactNo', required: true },
//         { placeholder:'Whatsapp No.:', inputType: 'tel', inputId: 'whatsappNo', inputName: 'whatsappNo', required: false },
//         { placeholder:'District:', inputType: 'text', inputId: 'city', inputName:'city', required: false },
//         { placeholder:'State:', inputType: 'text', inputId: 'state', inputName:'state', required: false },
//         { placeholder: 'NEET Score:', inputType: 'number', inputId: 'neetScore', inputName: 'neetScore', required: true},
//         { placeholder: 'NEET AIR:', inputType: 'number', inputId: 'neetScore', inputName: 'neetScore', required: true},
    
//     ];
  
//     fieldOptions.forEach(option => {
//         createField(form, option);
//     });
//     // const inlineGroup = document.createElement('div');
//     //   inlineGroup.className = 'inline-group';
  
//     //   createField(inlineGroup, { placeholder: 'District:', inputType: 'text', inputId: 'city', inputName: 'city', required: true });
//     //   createField(inlineGroup, { placeholder: 'State:', inputType: 'text', inputId: 'state', inputName: 'state', required: true });
  
//     //   form.appendChild(inlineGroup);
      
  
//     const courseSelectWrapper = document.createElement('div');
//     courseSelectWrapper.className = 'form-group full-width'; 
//     form.appendChild(courseSelectWrapper);

    
//     createSelectField(courseSelectWrapper, '', 'courseSelection', 'courseSelection', courseOptions);

//     // createField(form, { placeholder: 'NEET Score:', inputType: 'number', inputId: 'neetScore', inputName: 'neetScore', required: true});
//     // createField(form, { placeholder: 'NEET AIR:', inputType: 'number', inputId: 'neetScore', inputName: 'neetScore', required: true});
    
//     if (window.location.hostname === 'abhigyadufare.github.io') {
//       createField(form, { labelText: 'Preferred College:', inputType: 'text', inputId: 'preferredCollege', inputName: 'preferredCollege', required: true });
//   }
  
//   const SelectWrapper = document.createElement('div');
//   SelectWrapper.className = 'form-group';
//     createCheckboxField(form, 'I agree to receive information by signing up on Careerkick services', 'agreeCheckbox');
//     form.appendChild(SelectWrapper);
//     const buttonContainer = document.createElement('div');
//     buttonContainer.className = 'button-container';
//     form.appendChild(buttonContainer);
//     const submitButton = document.createElement('button');
//       submitButton.type = 'submit';
//       submitButton.textContent = 'Submit';
//       submitButton.className = 'submit-button';
//       form.appendChild(submitButton);
//       form.addEventListener('submit', submitForm);
      

//   }
//   function toggleFormStyle(styles) {
//     const formContainer = document.getElementById('formContainer');
//     formContainer.className = '';
//     formContainer.classList.add(styles); 
//   }
//   function addLogoAndContact(logo, contact) {
//     const header = document.createElement('div');
//     header.id = 'header';
//     document.body.insertBefore(header, document.body.firstChild);

    
//     const logoElement = document.createElement('img');
//     logoElement.src = logo; 
//     logoElement.alt = 'Company Logo';
//     logoElement.classList.add('logo-style'); 
//     header.appendChild(logoElement);

  
//     const contactElement = document.createElement('div');
//     contactElement.textContent = 'Contact us: ' + contact; 
//     contactElement.classList.add('contact-style'); 
//     header.appendChild(contactElement);
// }
// //   function createField(form, field) {
// //     // const { labelText, inputType, inputId, inputName, required } = field;
  
// //     // const wrapper = document.createElement('div');
// //     // wrapper.className = 'form-group';
  
// //     // const label = document.createElement('label');
// //     // label.textContent = labelText;
// //     // label.htmlFor = inputId;
// //     // wrapper.appendChild(label);
  
// //     // let input;
// //     // if (inputType === 'textarea') {
// //     //     input = document.createElement('textarea');
// //     // } else {
// //     //     input = document.createElement('input');
// //     //     input.type = inputType;
// //     // }
// //     // input.id = inputId;
// //     // input.name = inputName;
// //     // input.required = required;
// //     // wrapper.appendChild(input);
  
// //     // form.appendChild(wrapper);
    
// //   }
// function createField(form, field) {
//     const { placeholder, inputType, inputId, inputName, required } = field;

//     const wrapper = document.createElement('div');
//     wrapper.className = 'form-group';

//     let input;
//     if (inputType === 'textarea') {
//         input = document.createElement('textarea');
//     } else {
//         input = document.createElement('input');
//         input.type = inputType;
//     }

//     input.id = inputId;
//     input.name = inputName;
//     input.placeholder = placeholder; 
//     input.required = required;

//     wrapper.appendChild(input);
//     form.appendChild(wrapper);
// }

  
//   function createSelectField(form, labelText, selectId, selectName, options) {
//     const wrapper = document.createElement('div');
//     wrapper.className = 'form-select';
  
//     // const label = document.createElement('label');
//     // label.textContent = labelText;
//     // label.htmlFor = selectId;
//     // wrapper.appendChild(label);
  
//     const select = document.createElement('select');
//     select.id = selectId;
//     select.name = selectName;
//     select.required = true;

//     console.log(options);
//     JSON.parse(options).map((optionText) => {
//         const option = document.createElement('option');
//         option.textContent = optionText;
//         option.value = optionText;
//         select.appendChild(option);
//     });
  
//     wrapper.appendChild(select);
//     form.appendChild(wrapper);
//   }
//   function createCheckboxField(form, labelText, checkboxId) {
//     const wrapper = document.createElement('div');
//     wrapper.className = 'checkbox-group'; 

//     const checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';
//     checkbox.id = checkboxId;
//     checkbox.classList.add('checkbox-input'); 

//     const label = document.createElement('label');
//     label.textContent = labelText;
//     label.htmlFor = checkboxId;

//     wrapper.appendChild(checkbox);
//     wrapper.appendChild(label);

//     form.appendChild(wrapper);
// }


//   function getUrlParameter(name) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get(name);
//   }

//   const utmData = {
//     source: getUrlParameter('utm_source'),
//     sourceId: getUrlParameter('campaign_id')
//   };

//   function submitForm(event) {
//     event.preventDefault(); 
  
//     const formData = {
//         studentName: document.getElementById('studentName').value,
//         contactNo: document.getElementById('contactNo').value,
//         email: document.getElementById('email').value,
//         whatsappNo: document.getElementById('whatsappNo').value,
//         fatherName: document.getElementById('fatherName').value,
//         city: document.getElementById('city').value,
//         state: document.getElementById('state').value,
//         courseSelection: document.getElementById('courseSelection').value,
//         neetScore: document.getElementById('neetScore').value,
//         preferredCollege: document.getElementById('preferredCollege').value,
//         agreeCheckbox: document.getElementById('agreeCheckbox').checked,
//         formSource: utmData
//     };
  
  
//     if (formData.courseSelection === "Select Course") {
//         alert("Please select a course.");
//         return;
//     }
    
//     console.log(formData);
  
//     const form = document.getElementById('studentDetailsForm');
//     form.reset();
//   }

// document.addEventListener('DOMContentLoaded', () => {
//   const scriptElement = document.querySelector('script[src="https://suhanigupta03.github.io/lms-final/Form.js"]');
//   const pattern = scriptElement.getAttribute('pattern');
//   if(pattern==='popup')
//     {
//   setTimeout(() => {                                   
//     initializeForm();                       
//     openModal();                  
//   }, 4000);
//   createModal(); 
// }
// if(pattern==='button-modal')
//   {
//   createFormButton();
//   createModal(); 
//   }
//   if(pattern==='basic')
//     {
//   BasicinitializeForm();
//     }
//   console.log('DOMContentLoaded event fired');
// });
 
// function createModal() {
//   const modalOverlay = document.createElement('div');
//   modalOverlay.id = 'modalOverlay';
//   modalOverlay.classList.add('modal-overlay');
//   modalOverlay.style.display = 'none'; 

//   const modalContent = document.createElement('div'); 
//   modalContent.id = 'modalContent';
//   modalContent.classList.add('modal-content');

//   const closeButton = document.createElement('span');
//   closeButton.id = 'closeButton';
//   closeButton.classList.add('close-button');
//   closeButton.innerHTML = '&times;';
//   closeButton.addEventListener('click', closeModal);

//   modalContent.appendChild(closeButton);
//   modalOverlay.appendChild(modalContent);
//   document.body.appendChild(modalOverlay);
// }

// function openModal() {
//   const modalOverlay = document.getElementById('modalOverlay');
//   modalOverlay.style.display = 'flex';
// }

// function closeModal() {
//   const modalOverlay = document.getElementById('modalOverlay');
//   modalOverlay.style.display = 'none';
// }

// function initializeForm() {
//   console.log('initializeForm called');
//   const modalContent = document.getElementById('modalContent');

  
//   modalContent.innerHTML = '';

//   // Close button
//   const closeButton = document.createElement('span');
//   closeButton.id = 'closeButton';
//   closeButton.classList.add('close-button');
//   closeButton.innerHTML = '&times;';
//   closeButton.addEventListener('click', closeModal);

//   modalContent.appendChild(closeButton);

//   const scriptElement = document.querySelector('script[src="https://suhanigupta03.github.io/lms-final/Form.js"]');

//   if (!scriptElement) {
//     console.error('Script element with src="https://suhanigupta03.github.io/lms-final/Form.js" not found.');
//     return;
//   }

//   const path = scriptElement.getAttribute('path');
//   const courses = scriptElement.getAttribute('courses');
//   const styles = scriptElement.getAttribute('styles');
//   const logo = scriptElement.getAttribute('logo');
//   const contact = scriptElement.getAttribute('contact');
//   const customStylesheets = scriptElement.getAttribute('customStylesheets');

//   if (styles) {
//           const customStylesheet = document.querySelectorAll('link[rel="stylesheet"]');
//           if (customStylesheet > 0) {
//               const styleLink = document.createElement('link');
//               styleLink.rel = 'stylesheet';
//               styleLink.href = "https://suhanigupta03.github.io/lms-final/testStyle.css";
//               document.head.prepend(styleLink);
//           } else {
//               const styleLink = document.createElement('link');
//               styleLink.rel = 'stylesheet';
//               styleLink.href = "https://suhanigupta03.github.io/lms-final/style.css";
//               document.head.prepend(styleLink);
//           }
//       }

//   if (!path || !courses) {
//     console.error('Custom data attribute not found in script element.');
//     return;
//   }

//   const currentPath = window.location.pathname;
//   console.log('Current path:', currentPath);

  
//     try {
//             if (JSON.parse(path).includes(currentPath)) {
//                 console.log('Path matches, creating form'); // Debugging log
//                 createForm(courses, styles, logo, contact);
//                 toggleFormStyle(styles);
//             } else {
//                 console.log('Path does not match'); // Debugging log
//             }
//         } catch (e) {
//             console.error('Error parsing path attribute:', e);
//         }
//       }
  
  


// function createFormButton() {
//   const button = document.createElement('button');
//   button.textContent = 'Open Form';
//   button.addEventListener('click', () => {
//     console.log('Form button clicked');
//     initializeForm();
//     button.style.display = 'none';
//   });
//   document.body.appendChild(button);
// }

// function createForm(courseOptions, styles, logo, contact) {
//   const formContainer = document.createElement('div');
//   formContainer.id = 'formContainer';
//   formContainer.classList.add('form-container');
//   document.getElementById('modalContent').appendChild(formContainer); 
//   const header = document.createElement('div');
//   header.classList.add('formWrapper');
//   formContainer.insertBefore(header, formContainer.firstChild);
//   const logoAndContactContainer = document.createElement('div');
//   logoAndContactContainer.classList.add('logo-contact-container');
//   header.appendChild(logoAndContactContainer);

//   const logoElement = document.createElement('img');
//   logoElement.src = logo || 'https://suhanigupta03.github.io/lms-final/Careerkick.png';
//   console.log("careerkick logo");
//   logoElement.alt = 'Company Logo';
//   logoElement.classList.add('logo-style');
//   logoAndContactContainer.appendChild(logoElement);

//   const contactElement = document.createElement('div');
//   contactElement.textContent = 'Contact us: ' + contact;
//   contactElement.classList.add('contact-style');
//   logoAndContactContainer.appendChild(contactElement);

//   const form = document.createElement('form');
//   form.id = 'studentDetailsForm';
//   form.classList.add('formWrapper');
//   formContainer.appendChild(form);

//   const fieldOptions = [
//     { placeholder: "Student's Name:", inputType: 'text', inputId: 'studentName', inputName: 'studentName', required: true },
//     { placeholder: "Father's Name:", inputType: 'text', inputId: 'fatherName', inputName: 'fatherName', required: true },
//     { placeholder: 'Contact No.:', inputType: 'tel', inputId: 'contactNo', inputName: 'contactNo', required: true },
//     { placeholder: 'E-mail:', inputType: 'email', inputId: 'email', inputName: 'email', required: true },
//     { placeholder: 'Whatsapp No.:', inputType: 'tel', inputId: 'whatsappNo', inputName: 'whatsappNo', required: false },
//     { placeholder: 'District:', inputType: 'text', inputId: 'city', inputName: 'city', required: false },
//     { placeholder: 'State:', inputType: 'text', inputId: 'state', inputName: 'state', required: false },
//     { placeholder: 'NEET Score:', inputType: 'number', inputId: 'neetScore', inputName: 'neetScore', required: true },
//     { placeholder: 'NEET AIR:', inputType: 'number', inputId: 'neetAir', inputName: 'neetAir', required: true },
//   ];

//   fieldOptions.forEach(option => {
//     createField(form, option);
//   });

//   const courseSelectWrapper = document.createElement('div');
//   courseSelectWrapper.className = 'form-group full-width';
//   form.appendChild(courseSelectWrapper);

//   createSelectField(courseSelectWrapper, '', 'courseSelection', 'courseSelection', courseOptions);

//   if (window.location.hostname === 'abhigyadufare.github.io') {
//     createField(form, { placeholder: 'Preferred College:', inputType: 'text', inputId: 'preferredCollege', inputName: 'preferredCollege', required: true });
//   }

//   createCheckboxField(form, 'I agree to receive information by signing up on Careerkick services', 'agreeCheckbox');

//   const buttonContainer = document.createElement('div');
//   buttonContainer.className = 'button-container';
//   form.appendChild(buttonContainer);

//   const submitButton = document.createElement('button');
//   submitButton.type = 'submit';
//   submitButton.textContent = 'Submit';
//   submitButton.className = 'submit-button';
//   form.appendChild(submitButton);

//   form.addEventListener('submit', submitForm);
// }


// function toggleFormStyle(styles) {
//   const formContainer = document.getElementById('formContainer');
//   formContainer.className = '';
//   formContainer.classList.add(styles);
// }

// function createField(form, field) {
//   const { placeholder, inputType, inputId, inputName, required } = field;

//   const wrapper = document.createElement('div');
//   wrapper.className = 'form-group';

//   let input;
//   if (inputType === 'textarea') {
//     input = document.createElement('textarea');
//   } else {
//     input = document.createElement('input');
//     input.type = inputType;
//   }

//   input.id = inputId;
//   input.name = inputName;
//   input.placeholder = placeholder;
//   input.required = required;

//   wrapper.appendChild(input);
//   form.appendChild(wrapper);
// }

// function createSelectField(form, label, inputId, inputName, options) {
//   const wrapper = document.createElement('div');
//   wrapper.className = 'form-group full-width';

//   const select = document.createElement('select');
//   select.id = inputId;
//   select.name = inputName;

//   options = JSON.parse(options);
//   options.forEach(option => {
//     const optionElement = document.createElement('option');
//     optionElement.value = option;
//     optionElement.textContent = option;
//     select.appendChild(optionElement);
//   });

//   wrapper.appendChild(select);
//   form.appendChild(wrapper);
// }

// function createCheckboxField(form, label, inputId) {
//   const wrapper = document.createElement('div');
//   wrapper.className = 'form-group checkbox-group';

//   const checkbox = document.createElement('input');
//   checkbox.type = 'checkbox';
//   checkbox.id = inputId;
//   checkbox.name = inputId;
//   checkbox.className = 'checkbox-input';

//   const checkboxLabel = document.createElement('label');
//   checkboxLabel.htmlFor = inputId;
//   checkboxLabel.textContent = label;

//   wrapper.appendChild(checkbox);
//   wrapper.appendChild(checkboxLabel);
//   form.appendChild(wrapper);
// }

// function getUrlParameter(name) {
//   const urlParams = new URLSearchParams(window.location.search);
//   return urlParams.get(name);
// }

// const utmData = {
//   source: getUrlParameter('utm_source'),
//   sourceId: getUrlParameter('campaign_id')
// };

// function submitForm(event) {
//   event.preventDefault();
//   const courseSelection = document.getElementById('courseSelection').value;

//   // Check if the selected course is the default "Courses" option
//   if (courseSelection === 'Courses') {
//     alert('Please select a course.');
//     return;
//   }
//   const formData = {
//     studentName: document.getElementById('studentName').value,
//     contactNo: document.getElementById('contactNo').value,
//     email: document.getElementById('email').value,
//     whatsappNo: document.getElementById('whatsappNo').value,
//     fatherName: document.getElementById('fatherName').value,
//     city: document.getElementById('city').value,
//     state: document.getElementById('state').value,
//     courseSelection: courseSelection,
//     neetScore: document.getElementById('neetScore').value,
//     neetAir: document.getElementById('neetAir').value

//   };
//   if (window.location.hostname === 'abhigyadufare.github.io') {
//     const preferredCollegeElement = document.getElementById('preferredCollege');
//     if (preferredCollegeElement && preferredCollegeElement.required && preferredCollegeElement.value.trim()) {
//       formData.preferredCollege = preferredCollegeElement.value;
//     } else {
//       alert('Preferred College field is required.');
//       return;
//     }
//   }
  

//   console.log('Form submitted:', formData);
//   closeModal();
// }

// function BasicinitializeForm() {
//   console.log('initializeForm called');

//   const scriptElement = document.querySelector('script[src="https://suhanigupta03.github.io/lms-final/Form.js"]');

//   if (!scriptElement) {
//     console.error('Script element with src="https://suhanigupta03.github.io/lms-final/Form.js" not found.');
//     return;
//   }

//   const path = scriptElement.getAttribute('path');
//   const courses = scriptElement.getAttribute('courses');
//   const styles = scriptElement.getAttribute('styles');
//   const logo = scriptElement.getAttribute('logo');
//   const contact = scriptElement.getAttribute('contact');
//   const customStylesheets = scriptElement.getAttribute('customStylesheets');
//   if (styles) {
//           const customStylesheet = document.querySelectorAll('link[rel="stylesheet"]');
//           if (customStylesheet > 0) {
//               const styleLink = document.createElement('link');
//               styleLink.rel = 'stylesheet';
//               styleLink.href = "https://suhanigupta03.github.io/lms-final/testStyle.css";
//               document.head.prepend(styleLink);
//           } else {
//               const styleLink = document.createElement('link');
//               styleLink.rel = 'stylesheet';
//               styleLink.href = "https://suhanigupta03.github.io/lms-final/style.css";
//               document.head.prepend(styleLink);
//           }
//       }

//   if (!path || !courses) {
//     console.error('Custom data attribute not found in script element.');
//     return;
//   }

//   const currentPath = window.location.pathname;
//   console.log('Current path:', currentPath);

//   try {
//     if (JSON.parse(path).includes(currentPath)) {
//         console.log('Path matches, creating form'); // Debugging log
//         createForm(courses, styles, logo, contact);
//         toggleFormStyle(styles);
//     } else {
//         console.log('Path does not match'); // Debugging log
//     }
// } catch (e) {
//     console.error('Error parsing path attribute:', e);
// }
// }

// function BasiccreateForm(courseOptions, styles, logo, contact) {
//   const formContainer = document.createElement('div');
//   formContainer.id = 'formContainer';
//   formContainer.classList.add('form-container');
//   document.body.appendChild(formContainer); 
  
//   const header = document.createElement('div');
//   header.classList.add('formWrapper');
//   formContainer.appendChild(header); 
  
//   const logoAndContactContainer = document.createElement('div');
//   logoAndContactContainer.classList.add('logo-contact-container');
//   header.appendChild(logoAndContactContainer);

//   const logoElement = document.createElement('img');
//   logoElement.src = logo || 'https://suhanigupta03.github.io/lms-final/Careerkick.png';
//   console.log("careerkick logo");
//   logoElement.alt = 'Company Logo';
//   logoElement.classList.add('logo-style');
//   logoAndContactContainer.appendChild(logoElement);

//   const contactElement = document.createElement('div');
//   contactElement.textContent = 'Contact us: ' + contact;
//   contactElement.classList.add('contact-style');
//   logoAndContactContainer.appendChild(contactElement);

//   const form = document.createElement('form');
//   form.id = 'studentDetailsForm';
//   form.classList.add('formWrapper');
//   formContainer.appendChild(form);

//   const fieldOptions = [
//     { placeholder: "Student's Name:", inputType: 'text', inputId: 'studentName', inputName: 'studentName', required: true },
//     { placeholder: "Father's Name:", inputType: 'text', inputId: 'fatherName', inputName: 'fatherName', required: true },
//     { placeholder: 'Contact No.:', inputType: 'tel', inputId: 'contactNo', inputName: 'contactNo', required: true },
//     { placeholder: 'E-mail:', inputType: 'email', inputId: 'email', inputName: 'email', required: true },
//     { placeholder: 'Whatsapp No.:', inputType: 'tel', inputId: 'whatsappNo', inputName: 'whatsappNo', required: false },
//     { placeholder: 'District:', inputType: 'text', inputId: 'city', inputName: 'city', required: false },
//     { placeholder: 'State:', inputType: 'text', inputId: 'state', inputName: 'state', required: false },
//     { placeholder: 'NEET Score:', inputType: 'number', inputId: 'neetScore', inputName: 'neetScore', required: true },
//     { placeholder: 'NEET AIR:', inputType: 'number', inputId: 'neetAir', inputName: 'neetAir', required: true },
//   ];

//   fieldOptions.forEach(option => {
//     createField(form, option);
//   });

//   const courseSelectWrapper = document.createElement('div');
//   courseSelectWrapper.className = 'form-group full-width';
//   form.appendChild(courseSelectWrapper);

//   createSelectField(courseSelectWrapper, '', 'courseSelection', 'courseSelection', courseOptions);

//   if (window.location.hostname === 'abhigyadufare.github.io') {
//     createField(form, { placeholder: 'Preferred College:', inputType: 'text', inputId: 'preferredCollege', inputName: 'preferredCollege', required: true });
//   }

//   createCheckboxField(form, 'I agree to receive information by signing up on Careerkick services', 'agreeCheckbox');

//   const buttonContainer = document.createElement('div');
//   buttonContainer.className = 'button-container';
//   form.appendChild(buttonContainer);

//   const submitButton = document.createElement('button');
//   submitButton.type = 'submit';
//   submitButton.textContent = 'Submit';
//   submitButton.className = 'submit-button';
//   form.appendChild(submitButton);

//   form.addEventListener('submit', submitForm);
// // }
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
 
  const scriptElement = document.querySelector('script[src="https://suhanigupta03.github.io/lms-final/Form.js"]');
  if (!scriptElement) {
      console.error('Script element with src="https://suhanigupta03.github.io/lms-final/Form.js" not found.');
      return;
  }

   const formContainerDiv = document.querySelector('.form_container_NT');

  if (!formContainerDiv) {
      console.error('Div with id="form_container_NT" not found. Form will not be rendered.');
      return;
  }
  
  const pattern = scriptElement.getAttribute('pattern');
  if (pattern === 'popup') {
    setTimeout(() => {
      if (initializeForm(formContainerDiv)) {
        openModal();
      }
    }, 4000);
    createModal(formContainerDiv);
  }

  if (pattern === 'button-modal') {
    createFormButton(formContainerDiv);
    createModal(formContainerDiv);
  }

  if (pattern === 'basic') {
    BasicinitializeForm(formContainerDiv);
  }

  console.log('DOMContentLoaded event fired');
});

function createModal(formContainerDiv) {
  const modalOverlay = document.createElement('div');
  modalOverlay.id = 'modalOverlay';
  modalOverlay.classList.add('modal-overlay');
  modalOverlay.style.display = 'none';

  const modalContent = document.createElement('div');
  modalContent.id = 'modalContent';
  modalContent.classList.add('modal-content');

  const closeButton = document.createElement('span');
  closeButton.id = 'closeButton';
  closeButton.classList.add('close-button');
  closeButton.innerHTML = '&times;';
  closeButton.addEventListener('click', () => closeModal(formContainerDiv));

  modalContent.appendChild(closeButton);
  modalOverlay.appendChild(modalContent);

  formContainerDiv.appendChild(modalOverlay); // Append modal to the specific div
}

function openModal(formContainerDiv) {
  const modalOverlay = formContainerDiv.querySelector('#modalOverlay');
  modalOverlay.style.display = 'flex';
}

function closeModal(formContainerDiv) {
  const modalOverlay = formContainerDiv.querySelector('#modalOverlay');
  modalOverlay.style.display = 'none';
}

function initializeForm(formContainerDiv) {
  console.log('initializeForm called');

  const scriptElement = document.querySelector('script[src="https://suhanigupta03.github.io/lms-final/Form.js"]');
  if (!scriptElement) {
    console.error('Script element with src="https://suhanigupta03.github.io/lms-final/Form.js" not found.');
    return false;
  }

  const path = scriptElement.getAttribute('path');
  const courses = scriptElement.getAttribute('courses');
  const styles = scriptElement.getAttribute('styles');
  const logo = scriptElement.getAttribute('logo');
  const contact = scriptElement.getAttribute('contact');
  const customStylesheets = scriptElement.getAttribute('customStylesheets');

  if (styles) {
    const customStylesheet = document.querySelectorAll('link[rel="stylesheet"]');
    if (customStylesheet.length > 0) {
      const styleLink = document.createElement('link');
      styleLink.rel = 'stylesheet';
      styleLink.href = "https://suhanigupta03.github.io/lms-final/testStyle.css";
      document.head.prepend(styleLink);
    } else {
      const styleLink = document.createElement('link');
      styleLink.rel = 'stylesheet';
      styleLink.href = "https://suhanigupta03.github.io/lms-final/style.css";
      document.head.prepend(styleLink);
    }
  }

  if (!path || !courses) {
    console.error('Custom data attribute not found in script element.');
    return false;
  }

  const currentPath = window.location.pathname;
  console.log('Current path:', currentPath);

  try {
    if (JSON.parse(path).includes(currentPath)) {
      console.log('Path matches, creating form');
      createForm(courses, styles, logo, contact, formContainerDiv);
      toggleFormStyle(styles, formContainerDiv);
      return true;
    } else {
      console.log('Path does not match');
      return false;
    }
  } catch (e) {
    console.error('Error parsing path attribute:', e);
    return false;
  }
}

function createFormButton(formContainerDiv) {
  const button = document.createElement('button');
  button.textContent = 'Open Form';
  button.addEventListener('click', () => {
    console.log('Form button clicked');
    if (initializeForm(formContainerDiv)) {
      button.style.display = 'none';
    }
  });
  
  formContainerDiv.appendChild(button); // Append to the specific div
}

function createForm(courseOptions, styles, logo, contact, targetContainer) {
  const formContainer = document.createElement('div');
  formContainer.id = 'formContainer';
  formContainer.classList.add('form-container');

  targetContainer.appendChild(formContainer); // Append to the specific div

  // if (targetContainer) {
  //   targetContainer.appendChild(formContainer);
  // } else {
  //   document.getElementById('modalContent').appendChild(formContainer);
  // }

  const header = document.createElement('div');
  header.classList.add('formWrapper');
  formContainer.insertBefore(header, formContainer.firstChild);

  const logoAndContactContainer = document.createElement('div');
  logoAndContactContainer.classList.add('logo-contact-container');
  header.appendChild(logoAndContactContainer);

  const logoElement = document.createElement('img');
  logoElement.src = logo || 'https://suhanigupta03.github.io/lms-final/Careerkick.png';
  logoElement.alt = 'Company Logo';
  logoElement.classList.add('logo-style');
  logoAndContactContainer.appendChild(logoElement);

  const contactElement = document.createElement('div');
  contactElement.textContent = 'Contact us: ' + contact;
  contactElement.classList.add('contact-style');
  logoAndContactContainer.appendChild(contactElement);

  const form = document.createElement('form');
  form.id = 'studentDetailsForm';
  form.classList.add('formWrapper');
  formContainer.appendChild(form);

  const fieldOptions = [
    { placeholder: "Student's Name:", inputType: 'text', inputId: 'studentName', inputName: 'studentName', required: true },
    { placeholder: "Father's Name:", inputType: 'text', inputId: 'fatherName', inputName: 'fatherName', required: true },
    { placeholder: 'Contact No.:', inputType: 'tel', inputId: 'contactNo', inputName: 'contactNo', required: true },
    { placeholder: 'E-mail:', inputType: 'email', inputId: 'email', inputName: 'email', required: true },
    { placeholder: 'Whatsapp No.:', inputType: 'tel', inputId: 'whatsappNo', inputName: 'whatsappNo', required: false },
    { placeholder: 'District:', inputType: 'text', inputId: 'city', inputName: 'city', required: false },
    { placeholder: 'State:', inputType: 'text', inputId: 'state', inputName: 'state', required: false },
    { placeholder: 'NEET Score:', inputType: 'number', inputId: 'neetScore', inputName: 'neetScore', required: true },
    { placeholder: 'NEET AIR:', inputType: 'number', inputId: 'neetAir', inputName: 'neetAir', required: true },
  ];

  fieldOptions.forEach(option => {
    createField(form, option);
  });

  const courseSelectWrapper = document.createElement('div');
  courseSelectWrapper.className = 'form-group full-width';
  form.appendChild(courseSelectWrapper);

  createSelectField(courseSelectWrapper, '', 'courseSelection', 'courseSelection', courseOptions);

  if (window.location.hostname === 'abhigyadufare.github.io') {
    createField(form, { placeholder: 'Preferred College:', inputType: 'text', inputId: 'preferredCollege', inputName: 'preferredCollege', required: true });
  }

  createCheckboxField(form, 'I agree to receive information by signing up on Careerkick services', 'agreeCheckbox');

  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'button-container';
  form.appendChild(buttonContainer);

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';
  submitButton.className = 'submit-button';
  form.appendChild(submitButton);

  form.addEventListener('submit', submitForm);
}

function toggleFormStyle(styles) {
  const formContainer = document.getElementById('formContainer');
  formContainer.className = '';
  formContainer.classList.add(styles);
}

function createField(form, field) {
  const { placeholder, inputType, inputId, inputName, required } = field;

  const wrapper = document.createElement('div');
  wrapper.className = 'form-group';

  let input;
  if (inputType === 'textarea') {
    input = document.createElement('textarea');
  } else {
    input = document.createElement('input');
    input.type = inputType;
  }

  input.id = inputId;
  input.name = inputName;
  input.placeholder = placeholder;
  input.required = required;

  wrapper.appendChild(input);
  form.appendChild(wrapper);
}

function createSelectField(form, label, inputId, inputName, options) {
  const wrapper = document.createElement('div');
  wrapper.className = 'form-group full-width';

  const select = document.createElement('select');
  select.id = inputId;
  select.name = inputName;

  options = JSON.parse(options);
  options.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option;
    optionElement.textContent = option;
    select.appendChild(optionElement);
  });

  wrapper.appendChild(select);
  form.appendChild(wrapper);
}

function createCheckboxField(form, labelText, inputId) {
  const wrapper = document.createElement('div');
  wrapper.className = 'form-group full-width checkbox-group';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = inputId;
  checkbox.required = true;

  const label = document.createElement('label');
  label.htmlFor = inputId;
  label.textContent = labelText;

  wrapper.appendChild(checkbox);
  wrapper.appendChild(label);
  form.appendChild(wrapper);
}

function submitForm(event) {
  event.preventDefault();

  const form = document.getElementById('studentDetailsForm');
  const formData = new FormData(form);
  const formObject = Object.fromEntries(formData.entries());

  console.log('Form submitted:', formObject);

  const courseSelection = formObject.courseSelection;

  if (courseSelection === 'course2') {
    window.location.href = 'https://abhigyadufare.github.io/test/';
  } else if (courseSelection === 'course3') {
    window.location.href = 'https://abhigyadufare.github.io/mop-up/';
  } else {
    const submitMessage = document.createElement('div');
    submitMessage.className = 'submit-message';
    submitMessage.textContent = 'Thank you! Your form has been submitted.';
    form.appendChild(submitMessage);
  }
}

function BasicinitializeForm(formContainerDiv) {
  console.log('BasicinitializeForm called');

  const scriptElement = document.querySelector('script[src="https://suhanigupta03.github.io/lms-final/Form.js"]');
  if (!scriptElement) {
    console.error('Script element with src="https://suhanigupta03.github.io/lms-final/Form.js" not found.');
    return false;
  }

  const path = scriptElement.getAttribute('path');
  const courses = scriptElement.getAttribute('courses');
  const styles = scriptElement.getAttribute('styles');
  const logo = scriptElement.getAttribute('logo');
  const contact = scriptElement.getAttribute('contact');
  const customStylesheets = scriptElement.getAttribute('customStylesheets');

  if (styles) {
    const customStylesheet = document.querySelectorAll('link[rel="stylesheet"]');
    if (customStylesheet.length > 0) {
      const styleLink = document.createElement('link');
      styleLink.rel = 'stylesheet';
      styleLink.href = "https://suhanigupta03.github.io/lms-final/testStyle.css";
      document.head.prepend(styleLink);
    } else {
      const styleLink = document.createElement('link');
      styleLink.rel = 'stylesheet';
      styleLink.href = "https://suhanigupta03.github.io/lms-final/style.css";
      document.head.prepend(styleLink);
    }
  }

  if (!path || !courses) {
    console.error('Custom data attribute not found in script element.');
    return false;
  }

  const currentPath = window.location.pathname;
  console.log('Current path:', currentPath);

  try {
    if (JSON.parse(path).includes(currentPath)) {
      console.log('Path matches, creating form');
      createForm(courses, styles, logo, contact, formContainerDiv);
      toggleFormStyle(styles, formContainerDiv);
      return true;
    } else {
      console.log('Path does not match');
      return false;
    }
  } catch (e) {
    console.error('Error parsing path attribute:', e);
    return false;
  }
}

function BasiccreateForm(courseOptions, styles, logo, contact) {
    const formContainer = document.createElement('div');
    formContainer.id = 'formContainer';
    formContainer.classList.add('form-container');
    document.body.appendChild(formContainer); 
    
    const header = document.createElement('div');
    header.classList.add('formWrapper');
    formContainer.appendChild(header); 
    
    const logoAndContactContainer = document.createElement('div');
    logoAndContactContainer.classList.add('logo-contact-container');
    header.appendChild(logoAndContactContainer);
  
    const logoElement = document.createElement('img');
    logoElement.src = logo || 'https://suhanigupta03.github.io/lms-final/Careerkick.png';
    console.log("careerkick logo");
    logoElement.alt = 'Company Logo';
    logoElement.classList.add('logo-style');
    logoAndContactContainer.appendChild(logoElement);
  
    const contactElement = document.createElement('div');
    contactElement.textContent = 'Contact us: ' + contact;
    contactElement.classList.add('contact-style');
    logoAndContactContainer.appendChild(contactElement);
  
    const form = document.createElement('form');
    form.id = 'studentDetailsForm';
    form.classList.add('formWrapper');
    formContainer.appendChild(form);
  
    const fieldOptions = [
      { placeholder: "Student's Name:", inputType: 'text', inputId: 'studentName', inputName: 'studentName', required: true },
      { placeholder: "Father's Name:", inputType: 'text', inputId: 'fatherName', inputName: 'fatherName', required: true },
      { placeholder: 'Contact No.:', inputType: 'tel', inputId: 'contactNo', inputName: 'contactNo', required: true },
      { placeholder: 'E-mail:', inputType: 'email', inputId: 'email', inputName: 'email', required: true },
      { placeholder: 'Whatsapp No.:', inputType: 'tel', inputId: 'whatsappNo', inputName: 'whatsappNo', required: false },
      { placeholder: 'District:', inputType: 'text', inputId: 'city', inputName: 'city', required: false },
      { placeholder: 'State:', inputType: 'text', inputId: 'state', inputName: 'state', required: false },
      { placeholder: 'NEET Score:', inputType: 'number', inputId: 'neetScore', inputName: 'neetScore', required: true },
      { placeholder: 'NEET AIR:', inputType: 'number', inputId: 'neetAir', inputName: 'neetAir', required: true },
    ];
  
    fieldOptions.forEach(option => {
      createField(form, option);
    });
  
    const courseSelectWrapper = document.createElement('div');
    courseSelectWrapper.className = 'form-group full-width';
    form.appendChild(courseSelectWrapper);
  
    createSelectField(courseSelectWrapper, '', 'courseSelection', 'courseSelection', courseOptions);
  
    if (window.location.hostname === 'abhigyadufare.github.io') {
      createField(form, { placeholder: 'Preferred College:', inputType: 'text', inputId: 'preferredCollege', inputName: 'preferredCollege', required: true });
    }
  
    createCheckboxField(form, 'I agree to receive information by signing up on Careerkick services', 'agreeCheckbox');
  
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    form.appendChild(buttonContainer);
  
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    submitButton.className = 'submit-button';
    form.appendChild(submitButton);
  
    form.addEventListener('submit', submitForm);
  }
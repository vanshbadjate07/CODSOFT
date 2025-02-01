let clear = document.getElementById('clear');
let del = document.getElementById('del');
let per = document.getElementById('percent');
let div = document.getElementById('div');
let add = document.getElementById('add');
let sub = document.getElementById('sub');
let mul = document.getElementById('mul');
let dot = document.getElementById('dot');
let ans = document.getElementById('ans');

let num1 = document.getElementById('1');
let num2 = document.getElementById('2');
let num3 = document.getElementById('3');
let num4 = document.getElementById('4');
let num5 = document.getElementById('5');
let num6 = document.getElementById('6');
let num7 = document.getElementById('7');
let num8 = document.getElementById('8');
let num9 = document.getElementById('9');
let num0 = document.getElementById('0');

let input = document.getElementById('input');

// Clear input
clear.addEventListener('click', function() {
    input.value = ''; 
});

// Delete last character
del.addEventListener('click', function() {
    input.value = input.value.slice(0, -1); 
});

// Number buttons
num1.addEventListener('click', function() { input.value += '1'; });
num2.addEventListener('click', function() { input.value += '2'; });
num3.addEventListener('click', function() { input.value += '3'; });
num4.addEventListener('click', function() { input.value += '4'; });
num5.addEventListener('click', function() { input.value += '5'; });
num6.addEventListener('click', function() { input.value += '6'; });
num7.addEventListener('click', function() { input.value += '7'; });
num8.addEventListener('click', function() { input.value += '8'; });
num9.addEventListener('click', function() { input.value += '9'; });
num0.addEventListener('click', function() { input.value += '0'; });

// Dot button
dot.addEventListener('click', function() {
    if (input.value === '' || input.value.startsWith('.')) {
        return;
    }
    if (!input.value.includes('.')) {
        input.value += '.';  
    }
});

// Operator buttons
add.addEventListener('click', function() { 
    if (input.value && !input.value.endsWith('+')) {
        input.value += '+';  
    }
});
sub.addEventListener('click', function() { 
    if (input.value && !input.value.endsWith('-')) {
        input.value += '-';  
    }
});
mul.addEventListener('click', function() { 
    if (input.value && !input.value.endsWith('*')) {
        input.value += '*';  
    }
});
div.addEventListener('click', function() { 
    if (input.value && !input.value.endsWith('/')) {
        input.value += '/';  
    }
});
per.addEventListener('click', function() { 
    if (input.value && !input.value.endsWith('%')) {
        input.value += '%';  
    }
});

// Equal button (calculating the result)
ans.addEventListener('click', function() {
    try {
        // Replace the operator symbols with JavaScript supported operators
        let expression = input.value;
        expression = expression.replace(/x/g, '*').replace(/÷/g, '/').replace(/%/g, '/100'); 

        // Evaluate the expression
        input.value = eval(expression).toString();
    } catch (e) {
        input.value = 'Error'; // Show error if the input is invalid
    }
});

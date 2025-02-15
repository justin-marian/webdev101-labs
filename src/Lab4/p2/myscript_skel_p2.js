const iconMoon = document.querySelector('.night');
const iconSun = document.querySelector('.day');

const body = document.body;

/**
 * Initial states of the icons
 */
iconMoon.style.display = 'block';
iconSun.style.display = 'none';
const btnMode = document.querySelector('.btn');

btnMode.addEventListener('click', () => {
    /**
     * TODO - Add/Remove the 'active' class depending on
     *        the Day/Night Mode
     * 
     *   -> the 'active' class is used to change the background
     *      when switching to Day Mode (see body.active in .css)
     * 
     * ++ - try using only one command
     */
    document.body.classList.toggle("active");
    Switch_Icon();

    /**
     * * TODO - Create a function to change the text
     *        and call it (e.g. from 'Night Mode' to 'Day Mode')
     * 
     *   - you can pass any parameters to the function
     * 
     * TODO - Create a function to switch the icon
     * 
     * > Hint - which attribute can you change?
     */
    function Switch_Icon (){
        var H2 = document.querySelector(".text-mode");

        if ( iconMoon.style.display  == 'none') {
            iconSun.style.display = 'none';
            iconMoon.style.display = 'block';

            H2.style.color = "white";
            H2.textContent = "Night Mode";
        } 
        else if ( iconSun.style.display  == 'none') {
            iconMoon.style.display = 'none';
            iconSun.style.display = 'block';

            H2.style.color = "black";
            H2.textContent = "Light Mode";
        } 
    }
});

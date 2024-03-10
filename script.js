
            const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

            function switchTheme(e) {
                if (e.target.checked) {
                    document.documentElement.setAttribute('class', 'dark-mode');
                } else {
                    document.documentElement.setAttribute('class', '');
                }
            }

            toggleSwitch.addEventListener('change', switchTheme, false);
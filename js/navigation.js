function updateTitle(title){

    document
    .getElementById(
        'sceneTitle'
    )
    .innerText = title;

}

function createNavigation(){

    const bottomNav =
    document.getElementById(
        'bottomNav'
    );

    bottomNav.innerHTML = '';

    window.PANORAMA_SCENES
    .forEach(
        (
            scene,
            index
        )=>{

        const button =
        document.createElement(
            'button'
        );

        button.className =
        'navBtn';

        button.innerText =
        scene.title;

        if(index===0){

            button.classList.add(
                'active'
            );

            updateTitle(
                scene.title
            );

        }

        button.onclick = ()=>{

            loadScene(
                scene.id
            );

            updateTitle(
                scene.title
            );

            document
            .querySelectorAll(
                '.navBtn'
            )
            .forEach(btn=>{

                btn.classList.remove(
                    'active'
                );

            });

            button.classList.add(
                'active'
            );

        };

        bottomNav.appendChild(
            button
        );

    });

}
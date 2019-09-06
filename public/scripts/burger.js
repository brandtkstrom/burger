document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#submit-burger').addEventListener('click', evt => {
        evt.preventDefault();

        // Get burger input
        const newBurger = document.querySelector('#input-burger').value.trim().toLowerCase();
        if (newBurger === '') {
            return; // No input -> return early
        }

        // Add burger to DB
        fetch(`/burgers/${newBurger}`, { method: 'POST' })
            .then(res => {
                if (res.status === 200) {
                    window.location.reload();
                }
            })
            .catch(err => {
                alert('Error adding new burger: ' + err);
            });
    });

    document.querySelector('#button-reset').addEventListener('click', evt => {
        evt.preventDefault();

        fetch('/burgers', { method: 'DELETE' })
        .then(res => {
            if (res.status === 200) {
                window.location.reload();
            }
        })
        .catch(err => {
            alert('Error reseting the burgers DB: ' + err);
        });
    });

    document.addEventListener('click', e => {
        if (e.target && e.target.className === 'devour') {
            fetch(`/burgers/${e.target.id}`, { method: 'PUT' })
                .then(res => {
                    if (res.status === 200) {
                        window.location.reload();
                    }
                })
                .catch(err => {
                    alert('Error devouring burger! - ' + err);
                });
        }
    });
});

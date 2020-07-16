$(function () {
    $('.create-form').on('submit', function (event) {
        event.preventDefault();

        var selectBurger = {
            burger_name: $('#newburger')
                .val()
                .trim(),
            devoured: 0
        };
        $.ajax('/api/burgers', {
            type: "POST",
            data: selectBurger,
        }).then(function () {
            console.log('created new burger')
            location.reload();
        });
    });
    $('.devour').on('click', function (event) {
        event.preventDefault();

        var id = $(this).data('id');
        var devouredStatus = {
            devoured: 1
        };

        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: devouredStatus
        }).then(function () {
            console.log('Burger devoured');
            location.reload();
        });
    });
})
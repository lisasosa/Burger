$fuction() {
        $('.form-row').on('submit', function (event) {
            event.preventDefault();

            var selectBurger = {
                burger_name: $('#newburger')
                    .val()
                    .trim(),
                devoured: false
            };
            $.ajax('/api/burgers', {
                type: "POST",
                data: selectBurger
            }).then(function () {
                location.reload();
            });
        });
        $('.devour').on('click', function (event) {
            event.preventDefault();

            var id = $(this).data('id');
            var devouredStatus = {
                devoured: true
            };

            $.ajax('/api/burgers/' + id, {
                type: 'PUT'
                data: devouredStatus
            }).then(function () {
                location.reload();
            });
        });
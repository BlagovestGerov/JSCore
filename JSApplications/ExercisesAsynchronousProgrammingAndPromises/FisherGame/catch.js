function attachEvents() {
    const baseUrl = 'https://baas.kinvey.com/appdata/kid_HyrnBgwD-'
    const kinveyUsername = 'blaje';
    const kinveyPassword = 'b';
    const base64auth = btoa(kinveyUsername +':'+ kinveyPassword)
    const authHeader = {
        'Authorization': 'Basic '+base64auth,
        'Content-type': 'application/json'
    };

    $('.load').click(loadAllCatches());
    $('.add').click(createCatch)
    
    function request(method, endpoint, data) {
        return $.ajax({
            method: method,
            url: baseUrl + endpoint,
            headers: authHeader,
            data: JSON.stringify(data)
        })
    }

    // AJAX request to load all catches
    function loadAllCatches() {
        request('GET', '/biggestCatches')
            .then(displayAllCatches)
            .catch(handleError);
    }
    
    function displayAllCatches(data) {
       let catches = $('#catches');
        catches.empty();
        for(let catche of data) {
            catches.append($('<div>').addClass("catch").attr("data-id", catche._id)
                .append($('<label>').text("Angler"))
                .append($('<input>').attr("type", "text").addClass("angler").val(catche.angler))
                .append($('<label>').text("Weight"))
                .append($('<input>').attr("type", "number").addClass("weight").val(catche.weight))
                .append($('<label>').text("Species"))
                .append($('<input>').attr("type", "text").addClass("species").val(catche.species))
                .append($('<label>').text("Location"))
                .append($('<input>').attr("type", "text").addClass("location").val(catche.location))
                .append($('<label>').text("Bait"))
                .append($('<input>').attr("type", "text").addClass("bait").val(catche.bait))
                .append($('<label>').text("Capture Time"))
                .append($('<input>').attr("type", "number").addClass("captureTime").val(catche.captureTime))
                .append($('<button>').addClass("update").text("Update").click(updateCatch))
                .append($('<button>').addClass("delete").text("Delete").click(deleteCatch))
            );
       }

    }

    // AJAX request to update a catch
    function updateCatch() {
        let catchEl = $(this).parent();
        let dataObj =createDataJSON(catchEl);
        request('PUT', `/biggestCatches/${catchEl.attr('data-id')}`, dataObj)
            .then(loadAllCatches)
            .catch(handleError)

        //console.log($(this).parent().attr('data-id'));
    }


    //AJAX request to delete a catch
    function deleteCatch() {
        let catchId = $(this).parent().attr('data-id');

        request('DELETE', `/biggestCatches/${catchId}`)
            .then(loadAllCatches)
            .catch(handleError);
    }


    //AJAX request to create catch
    function createCatch() {
        let catchEl = $('#addForm');
        let dataObj = createDataJSON(catchEl);
        //console.log(dataOBj);

        request('POST', '/biggestCatches', dataObj)
            .then(loadAllCatches)
            .then(handleError);
    }

    function createDataJSON(catchEl) {
        return {
            angler:catchEl.find('.angler').val(),
            weight: + catchEl.find('.weight').val(),
            species:catchEl.find('.species').val(),
            location:catchEl.find('.location').val(),
            bait:catchEl.find('.bait').val(),
            captureTime: + catchEl.find('.captureTime').val()
        }

        //console.log(catchEl.find('.angler').val());
    }
    

    function handleError(err) {
        alert(`ERROR: ${err.statusText}`);
    }
}

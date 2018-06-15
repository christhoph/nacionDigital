
$(() => {

    var btnSize = $('#btn-size')

    if( $(window).innerWidth() > 576 ){

        $('#box2').removeClass('rotation')
        $('#box1').addClass('rotation')

    } else{

        $('#box1').removeClass('rotation')
        $('#box2').addClass('rotation')

    }

    $(window).resize(() => {

        var inputSize = $('#size').val()

        if( $(window).innerWidth() > 576 ){

            $('#box2').removeClass('rotation')
            $('#box1').addClass('rotation')

            if(inputSize != ''){

                $('#box1').css({'height': `${inputSize}px`, 'width': `${inputSize}px`})
                $('#box2').css({'height': `${inputSize}px`, 'width': `${inputSize}px`})

            } else{

                $('#box1').css({'height': `150px`, 'width': `150px`})
                $('#box2').css({'height': `150px`, 'width': `150px`})

            }

        } else{

            var boxSize = inputSize - (inputSize * 0.3)

            $('#box1').removeClass('rotation')
            $('#box2').addClass('rotation')

            if(inputSize != ''){

                $('#box1').css({'height': `${inputSize}px`, 'width': `${inputSize}px`})
                $('#box2').css({'height': `${boxSize}px`, 'width': `${boxSize}px`})

            } else{

                $('#box1').css({'height': `150px`, 'width': `150px`})
                $('#box2').css({'height': `105px`, 'width': `105px`})

            }

        }

    })

    btnSize.on('click', () => {

        var inputSize = $('#size').val()

        if( $(window).innerWidth() > 576 ){

            if(inputSize != ''){

                $('#box1').css({'height': `${inputSize}px`, 'width': `${inputSize}px`})
                $('#box2').css({'height': `${inputSize}px`, 'width': `${inputSize}px`})

            } else{

                $('#box1').css({'height': `150px`, 'width': `150px`})
                $('#box2').css({'height': `150px`, 'width': `150px`})

            }

        } else{

            var boxSize = inputSize - (inputSize * 0.3)

            if(inputSize != ''){

                $('#box1').css({'height': `${inputSize}px`, 'width': `${inputSize}px`})
                $('#box2').css({'height': `${boxSize}px`, 'width': `${boxSize}px`})

            } else{

                $('#box1').css({'height': `150px`, 'width': `150px`})
                $('#box2').css({'height': `105px`, 'width': `105px`})
                
            }

        }

    })

})
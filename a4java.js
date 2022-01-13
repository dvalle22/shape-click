draw_shapes = function() {
    quantity = $('#difficulty_input').val()
    type = $('#shape_select').val()
        zap_point = 0
        zap = function() {
            this.remove()
            zap_point = zap_point + 1
            $('#score').html('Score: ' + zap_point)
            $('#win_lose_message').css({'display': 'inline'})
            if (zap_point == quantity) {
                $('#win_lose_message').css({'display': 'inline', 'color': '#00F'})
                $('#win_lose_message').html('You Win!')
            } else {
                $('#win_lose_message').css({'display': 'none'})
              }  
        }
        miss = function() {
            this.remove()
            miss_point = quantity - zap_point
            $('#missed').html('Missed: ' + miss_point)
            if (zap_point < quantity) {
                $('#win_lose_message').css({'display': 'inline', 'color': '#F00'})
                $('#win_lose_message').html('Try Again!')
            } else {
                $('#win_lose_message').css({'display': 'none'})
              }  
        }
    
    for (count = 1; count <= quantity; count += 1) {
    
        if (type == 'a') {
          shape = paper.circle(0, 0, 100/Math.sqrt(quantity)) 
        }
        if (type == 'b') {
          shape = paper.rect(0, 0, 200/Math.sqrt(quantity), 200/Math.sqrt(quantity)) 
        }   
        if (type == 'c') {
          shape = paper.path('M0,0'+' '+'L0,'+200/Math.sqrt(quantity)+' '+'L'+200/Math.sqrt(quantity)+','+100/Math.sqrt(quantity)+' '+'Z') 
        }
        x = Math.random() * 350
        y = Math.random() * 350
        shape_attr = {
          'fill': '#F70',
          'stroke': '#000',
          'stroke-width': '1',
          'transform': 't' + x + ',' + y
          
        }
        shape.attr(shape_attr)
    
        w = Math.random() * 400
        v = Math.random() * 400
        shape_move = {
            'transform': 't' + w + ',' + v + 'r360'
        }
        shape.animate(shape_move, Math.sqrt(2*quantity)*1000, 'linear', miss)   
        shape.click(zap)
            }
        $('#score').html('Score: 0')
        $('#missed').html('Missed: 0')
        $('#win_lose_message').css({'display': 'none'})
    }
    
    setup = function() {
    paper = Raphael('container', 400, 400)
    $('#start_button').click(draw_shapes)
    }
    
    jQuery(document).ready(setup)
    
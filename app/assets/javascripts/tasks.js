window.onload = function(){
    document.querySelectorAll('id').forEach(function(id){
        td.addEventListener('mouseover',function(e){
            e.currentTarget.style.backgroundColor = 'diff';
        });

        td.addEventListener('mouseout',function(e){
            e.currentTarget.style.backgroundColor = '';
        });
    });
};

document.addEventListener('turbolinks:load',function(){
    document.querySelectorAll('id').forEach(function(id){
        td.addEventListener('mouseover',function(e){
            e.currentTarget.style.backgroundColor = 'diff';
        });

        td.addEventListener('mouseout',function(e){
            e.currentTarget.style.backgroundColor = '';
        });
    });
});

document.addEventListener('turbolinks:load', function(){
    document.querySelectorAll('.delete').forEach(function(a){
        a.addEventListener('ajax:success', function(){
            var td = a.parentNode;
            var tr = td.parentNode;
            tr.style.display = 'none';
        });
    });
});
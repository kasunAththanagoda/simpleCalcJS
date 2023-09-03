const fetchData=(callBack)=>{
    $.ajax({
        url:'https://jsonplaceholder.typicode.com/photos',
        method:'GET',
        dataType:'json',
        success:(response)=>{
            callBack(response)
        },
        error:(err)=>{
            console.log("error",err);
        }
    })
}

const loadData=()=>{
    fetchData((response)=>{
        console.log("data",response)

        $.each(response,function(i,element){
            const row=$('<tr>');

            const colId=$('<td>').text(element.id);
            const colAlbumId=$('<td>').text(element.albumId);
            const colTitle=$('<td>').text(element.title);
            const colImage=$('<td>').
            append($('<img>')
            .attr('src',element.thumbnailUrl)
            .attr('loading','lazy')
            .css({
                height:'70px',
                width:'70px'
            }));

            row.append(colId,colAlbumId,colTitle,colImage);
            $('.table tbody').append(row);
        })
    });
}
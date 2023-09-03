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


const addData=()=>{
    const newData={
        albumId: 1,
        id: 1,
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952"
    }

    $.ajax({
        url:'https://jsonplaceholder.typicode.com/photos',
        method:'POST',
        data:JSON.stringify(newData),
        contentType:'application/json',
        success:(response)=>{
            console.log("data added successfully",response)
        },
        error:(err)=>{
            console.log("error",err);
        }
    })
}



// update data
const updateData=()=>{
    let id=1
    const newData={
        albumId: 1,
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
        title: "asd",
        url: "https://via.placeholder.com/600/92c952"
    }

    $.ajax({
        url:`https://jsonplaceholder.typicode.com/photos/${id}`,
        method:'PUT',
        data:JSON.stringify(newData),
        contentType:'application/json',
        success:(response)=>{
            console.log("data updated successfully",response)
        },
        error:(err)=>{
            console.log("error",err);
        }
    })
}
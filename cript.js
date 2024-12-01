var home=document.querySelector("#home");
home.style.color="red";
home.innerHTML=
home.addEventListener('mouseenter',function(){
    home.style.color="blue";
})
home.addEventListener('mouseleave',function(){
    home.style.color="black";
})
var arr = [
    {name: "Petals of roses", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_C5nl6XntZ-BMgDlrENwIwoLnPoQIYnszNw&s"},
    {name: "Animals of town", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPJI7xTuY_dHf_PXcm0lqK-zkZ6byi_O9evQ&s" },
    {name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "orange peeled", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJJBbkVBSY4fD_q82e-tBAuh1wNtR_pJDGkg&s"},
    {name: "web design", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-Rg6JQhVYU-nVMZZFt3tAHEorrCPvFgQNA&s"},
    {name: "apple juice", image: "https://cdn.dnaindia.com/sites/default/files/2022/01/09/1013826-disha-patani.jpg?im=FitAndFill=(1200,900)"},
    {
        name:"heloo dear", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsBlS6gy7t4gfoCGCeqphtVv4DzchML43amg&s"
    }, {name: "Petals of roses", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_C5nl6XntZ-BMgDlrENwIwoLnPoQIYnszNw&s"},
    {name: "Animals of town", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPJI7xTuY_dHf_PXcm0lqK-zkZ6byi_O9evQ&s" },
    {name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "orange peeled", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJJBbkVBSY4fD_q82e-tBAuh1wNtR_pJDGkg&s"},
    {name: "web design", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-Rg6JQhVYU-nVMZZFt3tAHEorrCPvFgQNA&s"},
    {name: "apple juice", image: "https://cdn.dnaindia.com/sites/default/files/2022/01/09/1013826-disha-patani.jpg?im=FitAndFill=(1200,900)"},
    {
        name:"heloo dear", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsBlS6gy7t4gfoCGCeqphtVv4DzchML43amg&s"
    }, {name: "Petals of roses", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_C5nl6XntZ-BMgDlrENwIwoLnPoQIYnszNw&s"},
    {name: "Animals of town", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPJI7xTuY_dHf_PXcm0lqK-zkZ6byi_O9evQ&s" },
    {name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "orange peeled", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJJBbkVBSY4fD_q82e-tBAuh1wNtR_pJDGkg&s"},
    {name: "web design", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-Rg6JQhVYU-nVMZZFt3tAHEorrCPvFgQNA&s"},
    {name: "apple juice", image: "https://cdn.dnaindia.com/sites/default/files/2022/01/09/1013826-disha-patani.jpg?im=FitAndFill=(1200,900)"},
    {
        name:"heloo dear", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsBlS6gy7t4gfoCGCeqphtVv4DzchML43amg&s"
    }
]
function showTheCards(){
    var clutter = "";
    arr.forEach(function(obj){
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`;
    })

    document.querySelector(".container")
    .innerHTML = clutter;
}
showTheCards()
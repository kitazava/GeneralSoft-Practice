export function opPlus(){
    var frInput = Number(document.getElementById("firstInput").value)
    var scInput = Number(document.getElementById("secondInput").value)
    var res = frInput + scInput
    document.getElementById("result").innerHTML = res
}

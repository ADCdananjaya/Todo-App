var list = $("#list");

$(document).ready(function() {
    $("#add").click(function() {
        let text = $("#input").val();
        let textId = text.replaceAll(" ", "_");
        if (text != "") {
            list.append(`
                <div class="relative my-4" id="${textId}">
                    <div class="flex absolute inset-y-0 right-3 items-center pl-3">
                        <button type="submit" class="hover:bg-white rounded-lg border border-black shadow-lg" onclick="removeItem(${textId})">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div class="flex absolute inset-y-0 right-12 items-center pl-3 pr-1">
                        <button type="submit" id="${textId + '_checked'}" class="hover:bg-white rounded-full border border-black shadow-lg" onclick="checked(${textId}, ${textId + '_checked'})">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        </button>
                    </div>
                    <li class="px-6 py-2 border-b border-gray-200 w-full rounded-lg bg-blue-600 text-white shadow-lg capitalize"> ${text}</li>
                </div>
            `);
            $("#input").val("");
        }
    });
});

function removeItem(id){
    $(id).remove();
}

function checked(id1, id2){
    $(id2).addClass("bg-white rounded-full border border-black shadow-lg");
    $("#" + $(id1).attr("id") + " li").addClass("px-6 py-2 border-b border-gray-200 w-full rounded-lg bg-emerald-700 text-white");
}
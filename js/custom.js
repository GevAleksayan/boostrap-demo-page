$(document).ready(function () {
   $(document).on('scroll', function () {
       let scroll = $(window).scrollTop();
       if(scroll > 300) {
           $('#fixed-navbar').addClass('fixed-top shadow');
       }
       else {
           $('#fixed-navbar').removeClass('fixed-top shadow');
       }
   })
});


const bubbleSort = (array) => {
	for(let i = 0; i < array.length; i++) {
		for(let j = 0; j < array.length - i; j++) {
			if(array[j] > array[j+1]) {
				let tmp = array[j];
				array[j] = array[j+1];
				array[j+1] = tmp;
			}
		}
	}
	return array;
}

const binarySearch = (array, number) => {
	let sorted = bubbleSort(array);
	let index = Math.floor(sorted.length/2);
	for(let i = 0; i < sorted.length; i++) {
		if(sorted[index] == number) {
			return index;
		}
		index = Math.max(number, sorted[index]) ? 
			Math.floor(index + sorted.length/2) :
			Math.floor(index/2);
	}
}



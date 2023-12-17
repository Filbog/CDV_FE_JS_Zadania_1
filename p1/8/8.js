quantity = 3;
nums = [];
while (quantity > 0) {
  n = prompt("enter numberr");
  nums.push(n);
  quantity--;
}

rand_index = Math.floor(Math.random() * nums.length);
console.log(nums);
console.log(rand_index);
console.log(nums[rand_index]);

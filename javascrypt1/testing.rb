def my_transpose(arr)

  # arr.each_with_index.map { |sub, i| sub.map { sub[i] } }
  arr1 = []

  arr.each_with_index do |sub, i|
    arr2 = []
    sub.each_with_index do |ele, j|
      arr2 << arr[j][i]
    end
    arr1 << arr2
  end
  arr1
end

array1 = [ [1, 2], [3, 4] ]

array1[0][1] = 2
array1[1][0] = 3

p my_transpose(array1) # => [[1,3],[2,4]]
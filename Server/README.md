# Object Packing Optimization

This project focuses on optimizing the packing of objects into a container based on different criteria such as packing efficiency, profit, and weight. Given a set of objects with their weight, volume, and price, the goal is to fill a container with limited volume and weight in a way that maximizes the chosen criterion.

## Getting Started

To use this project, follow the instructions below:

1. Clone the repository or download the project files.

2. Ensure you have Node.js installed on your machine.

3. Open the terminal or command prompt and navigate to the project directory.

4. Install the project dependencies by running the following command:


5. Open the main JavaScript file, `packing.js`, in a text editor.

6. Modify the `objects` array to include the objects you want to pack. Each object should have properties such as `weight`, `volume`, and `price`.

7. Adjust the values of `containerVolume` and `maxWeight` to set the container's volume and maximum weight capacity.

8. Save the changes to `packing.js`.

9. Run the program by executing the following command:


10. The program will display the results for maximizing packing efficiency, profit, and weight based on the provided objects and criteria.

## Algorithm Explanation

The project uses a greedy algorithm approach to solve the optimization problem. Here's a breakdown of the algorithm for each criterion:

- Maximizing Packing Efficiency:
- Calculate the density (weight/volume) for each object.
- Sort the objects in descending order of their density.
- Start placing the objects with the highest density into the container until either the container is full or the weight limit is reached.

- Maximizing Profit:
- Calculate the profit density (price/volume) for each object.
- Sort the objects in descending order of their profit density.
- Start placing the objects with the highest profit density into the container until either the container is full or the weight limit is reached.

- Maximizing Weight:
- Sort the objects in descending order of their weight.
- Start placing the objects with the highest weight into the container until either the container is full or the weight limit is reached.

Note that the code assumes objects can be divided or fractional packing is allowed. If objects must be packed as whole units, further modifications to the code or the adoption of a different algorithm, such as integer programming, might be necessary.

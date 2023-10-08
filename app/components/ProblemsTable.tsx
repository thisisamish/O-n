const problems = [
	{
		id: 1,
		completed: false,
		name: 'Problem 1',
		category: 'Arrays',
		difficulty: 'Easy',
	},
	{
		id: 2,
		completed: true,
		name: 'Problem 2',
		category: 'Strings',
		difficulty: 'Medium',
	},
	{
		id: 3,
		completed: false,
		name: 'Problem 3',
		category: 'Linked Lists',
		difficulty: 'Hard',
	},
	{
		id: 4,
		completed: true,
		name: 'Problem 4',
		category: 'Trees',
		difficulty: 'Easy',
	},
	{
		id: 5,
		completed: false,
		name: 'Problem 5',
		category: 'Graphs',
		difficulty: 'Medium',
	},
	{
		id: 6,
		completed: true,
		name: 'Problem 6',
		category: 'Arrays',
		difficulty: 'Hard',
	},
	{
		id: 7,
		completed: false,
		name: 'Problem 7',
		category: 'Strings',
		difficulty: 'Easy',
	},
	{
		id: 8,
		completed: true,
		name: 'Problem 8',
		category: 'Linked Lists',
		difficulty: 'Medium',
	},
	{
		id: 9,
		completed: false,
		name: 'Problem 9',
		category: 'Trees',
		difficulty: 'Hard',
	},
	{
		id: 10,
		completed: true,
		name: 'Problem 10',
		category: 'Graphs',
		difficulty: 'Easy',
	},
	{
		id: 11,
		completed: false,
		name: 'Problem 11',
		category: 'Arrays',
		difficulty: 'Medium',
	},
	{
		id: 12,
		completed: true,
		name: 'Problem 12',
		category: 'Strings',
		difficulty: 'Hard',
	},
	{
		id: 13,
		completed: false,
		name: 'Problem 13',
		category: 'Linked Lists',
		difficulty: 'Easy',
	},
	{
		id: 14,
		completed: true,
		name: 'Problem 14',
		category: 'Trees',
		difficulty: 'Medium',
	},
	{
		id: 15,
		completed: false,
		name: 'Problem 15',
		category: 'Graphs',
		difficulty: 'Hard',
	},
	{
		id: 16,
		completed: true,
		name: 'Problem 16',
		category: 'Arrays',
		difficulty: 'Easy',
	},
	{
		id: 17,
		completed: false,
		name: 'Problem 17',
		category: 'Strings',
		difficulty: 'Medium',
	},
	{
		id: 18,
		completed: true,
		name: 'Problem 18',
		category: 'Linked Lists',
		difficulty: 'Hard',
	},
	{
		id: 19,
		completed: false,
		name: 'Problem 19',
		category: 'Trees',
		difficulty: 'Easy',
	},
	{
		id: 20,
		completed: true,
		name: 'Problem 20',
		category: 'Graphs',
		difficulty: 'Medium',
	},
];

const ProblemsTable = () => {
	const categories = Array.from(
		new Set(problems.map((problem) => problem.category))
	);
	return (
		<>
			{/* //         <div className="collapse bg-base-200">
		//   <input type="checkbox" />
		//   <div className="collapse-title text-xl font-medium">
		//     Click me to show/hide content
		//   </div>
		//   <div className="collapse-content">
		//     <p>hello</p>
		//   </div>
		// </div> */}
			{categories.map((category, ind) => (
				<div className="collapse bg-base-200" key={ind}>
					<input type="checkbox" />
					<div className="collapse-title text-xl font-medium">
						{category}
					</div>
					<div className="collapse-content">
						<div className="overflow-x-auto" key={ind}>
							<table className="table">
								<thead>
									<tr>
										<th>Completed</th>
										<th>Name</th>
										<th>Difficulty</th>
									</tr>
								</thead>
								<tbody>
									{problems
										.filter(
											(problem) =>
												problem.category === category
										)
										.map((problem) => (
											<tr key={problem.id}>
												<td>{problem.completed}</td>
												<td>{problem.name}</td>
												<td>{problem.difficulty}</td>
											</tr>
										))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default ProblemsTable;

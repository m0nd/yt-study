export function getTopicIds() {
    return [
        {params: {id: "dfs"}},
        {params: {id: "bfs"}},
        {params: {id: "backtrack"}},
        {params: {id: "recursion"}},
    ]
}

export function getTopicData(id) {
    const data = {};
    switch(id) {
        case "dfs":
            data.name = "DFS";
            data.searchName = "depth first search"
            break;
        case "bfs":
            data.name = "BFS";
            data.searchName = "breadth first search"
            break;
        case "backtrack":
            data.name = "Backtracking";
            data.searchName = "backtracking algorithm"
            break;
        case "recursion":
            data.name = "Recursion";
            data.searchName = "recursion"
            break;
    }

    return {
        id,
        ...data
    }
    
}
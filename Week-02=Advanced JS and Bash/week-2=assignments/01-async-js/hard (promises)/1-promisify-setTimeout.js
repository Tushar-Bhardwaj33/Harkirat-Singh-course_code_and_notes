/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n)
{
    return new Promise((resolve) =>
    {
        setTimeout(() =>
        {
            resolve(`Resolved after ${n} seconds`);
        }, n * 1000);
    });
}

wait(3).then((message) =>
{
    console.log(message); // This will print "Resolved after 3 seconds" after 3 seconds
});

module.exports = wait;

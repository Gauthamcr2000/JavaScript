console.log("Hello!");

let q = ["The best way to predict future is to create it. -Abraham Lincoln",
         "I don't want to survive. I want to live. -The Captain, Wall-E",
         "If you can DREAM, you can DO it. -Walt Disney",
         "When life gets you down do you wanna know what you've gotta do? Just keep swimming. -Dory, Finding Nemo",
         "Some people are worth melting for. -Olaf, Frozen",
         "When everything seems to be going aganist you, remember that the airplane takes off aganist the wind, not with it. -Henry Ford",
         "Choose a job you love, and you will never have to work a day in life. -Confucius",
         "Just because someone stumbles and loses their path, doesn't mean they're lost forever. -Charles Xavier",
         "You cannot live your life to please others. The choice must be yours. -The White Queen",
         "If you're offered a seat on a rocket ship, don't ask what seat! Just get on. -Sheryl Sandberg",
         "I have never met a man so ignorant that I couldn't learn something from him. -Galileo Galilei",
         "Success is going from failure to failure without losing your enthusiasm. -Winston Churchill",
         "The flower that blooms in adversity is the most rare and beautiful of all. -The Emperor, Mulan",
         "The best ideas come as jokes. Make your thinking as funny as possible. -David Ogilvy",
         "If you do things well, do them better. Be daring, be first, be different, be just. -Anita Roddick"]

let newquote = () =>{
    let rannum = Math.floor(Math.random()*(q.length));
    document.getElementById('quotedisplay').innerHTML = q[rannum];
}
newquote();
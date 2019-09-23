export function ministriesData(){
    return{
      type:'MINISTRIES_LIST',
      payload:  [
        { id: 1, name: "Senders Fellowship", image: "/images/sendme.jpg", link: "/senders" },
        { id: 2, name: "Consistent Bible Reading", image: "/images/cbr.jpg", link: "/cbr" },
        { id: 3, name: "My blog", image: "/images/blog.jpg", link: "/myblog" },
        { id: 4, name: "My journal", image: "/images/journal.jpg", link: "/myjournal" },
        { id: 5, name: "The great commission", image: "/images/gc.jpg", link: "/greatcommision" },
      ]
    }
  }

  export function whatNew(){
    return{
      type:'EVENTS_LIST',
      payload:  [
        { id: 1, date: "17th October 2019",
          event: "Mission trip to Sombo, Marsabit County in the North Eastern Kenya",
          image: "/images/senders/sombopic.jpg",
          link: "/sombo-mission",
          slug: "/sombo-mission" },
          
        { id: 2,
          date: "17th October 2019",
          event: "Upcoming Mission Trip to Sombo, Garissa",
          image: "/images/sendme.jpg",
          link: "/sombo-mission",
          slug: "/sombo-mission" },
      ]
    }
  }
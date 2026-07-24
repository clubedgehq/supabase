const tweets = [
  {
    text: 'Clubedge completely changed how we run our athletics club. Member renewals used to take days — now they are handled automatically. Our volunteers finally have time to focus on actual coaching.',
    url: '#',
    handle: 'SarahT_AthleticsClub',
    img_url: '',
    weight: 10,
  },
  {
    text: 'We moved our 300-member association off spreadsheets and onto Clubedge in a single weekend. The onboarding guide was clear and the support team was incredible.',
    url: '#',
    handle: 'MarkJ_Westside',
    img_url: '',
    weight: 10,
  },
  {
    text: "Our event registrations used to be a mess of emails and manual lists. Clubedge's QR check-in alone was worth switching. We haven't missed a single attendee since.",
    url: '#',
    handle: 'LenaF_RowingClub',
    img_url: '',
    weight: 9,
  },
  {
    text: "Edgey, the AI assistant inside Clubedge, is genuinely useful. It suggested communication templates we hadn't thought of and helped us set up our first automated reminder flow.",
    url: '#',
    handle: 'PriyaN_Community',
    img_url: '',
    weight: 9,
  },
  {
    text: "I was skeptical at first — we are a small hiking club, not a tech company. But Clubedge is so intuitive that even our least tech-savvy committee member picked it up in an afternoon.",
    url: '#',
    handle: 'ThomasE_Summit',
    img_url: '',
    weight: 9,
  },
  {
    text: "The file storage in Clubedge is exactly what we needed. All our meeting minutes, training guides, and registration docs are now in one place, accessible to the right people.",
    url: '#',
    handle: 'AminaK_DebateSoc',
    img_url: '',
    weight: 8,
  },
  {
    text: 'We replaced three separate tools — a form builder, an email service, and a file host — with Clubedge. It costs less and everything actually talks to each other now.',
    url: '#',
    handle: 'JamesO_President',
    img_url: '',
    weight: 8,
  },
  {
    text: "Our club runs trainings three times a week. Clubedge's training scheduler keeps coaches, participants, and resources aligned. We have not had a double-booking in months.",
    url: '#',
    handle: 'CarlosM_GymClub',
    img_url: '',
    weight: 8,
  },
  {
    text: "Announcement broadcasts used to mean copying and pasting into email. Now I write one message in Clubedge, select the group, and it's sent. That's it. Huge time saver.",
    url: '#',
    handle: 'YukiT_Association',
    img_url: '',
    weight: 7,
  },
  {
    text: 'The member portal means members can update their own info, view upcoming events, and access documents without emailing us. Our inbox is so much quieter now.',
    url: '#',
    handle: 'FatimaZ_CommLead',
    img_url: '',
    weight: 7,
  },
  {
    text: 'We ran our annual general meeting registration entirely through Clubedge. Custom form, email confirmation, attendance tracking. Zero headaches. Would not go back.',
    url: '#',
    handle: 'BenD_YouthClub',
    img_url: '',
    weight: 7,
  },
  {
    text: "Clubedge's support for clubs is real. When we had a question about setting up group permissions, someone replied within the hour with a clear walkthrough.",
    url: '#',
    handle: 'NadineR_SportsClub',
    img_url: '',
    weight: 6,
  },
  {
    text: 'We used to lose track of which members had paid dues each year. Now Clubedge handles renewals, sends reminders, and flags overdue accounts automatically.',
    url: '#',
    handle: 'GregT_Treasurer',
    img_url: '',
    weight: 6,
  },
  {
    text: 'Forms for new member applications, event feedback, volunteer sign-ups — all built inside Clubedge in minutes. No third-party tools needed.',
    url: '#',
    handle: 'SionaP_VolunteerMgr',
    img_url: '',
    weight: 6,
  },
  {
    text: "Honestly the best platform decision our association has made. We are more organised, more responsive, and our members are happier. That's all that matters.",
    url: '#',
    handle: 'DianaL_AssocPres',
    img_url: '',
    weight: 5,
  },
  {
    text: 'Our parent committee was worried about switching platforms. After the first week on Clubedge everyone agreed we should have switched sooner.',
    url: '#',
    handle: 'OkonkwoF_ParentComm',
    img_url: '',
    weight: 5,
  },
  {
    text: "Clubedge brings together everything a club needs. Events, members, files, comms — it is genuinely an all-in-one solution and it actually works.",
    url: '#',
    handle: 'RachelV_ClubAdmin',
    img_url: '',
    weight: 5,
  },
  {
    text: "I set up our new season schedule, updated member roles, and sent an announcement all in one Clubedge session. Used to take me a full day across different tools.",
    url: '#',
    handle: 'IvanK_CoachCoord',
    img_url: '',
    weight: 4,
  },
]

export const getWeightedTweets = (count: number): typeof tweets => {
  const fallbackWeight = 1
  const availableTweets = [...tweets]
  const selectedTweets: typeof tweets = []
  let remainingWeight = availableTweets.reduce(
    (sum, tweet) => sum + (tweet.weight ?? fallbackWeight),
    0
  )

  for (let i = 0; i < count && availableTweets.length > 0; i++) {
    const random = Math.random() * remainingWeight

    let accumulatedWeight = 0
    let selectedIndex = -1

    for (let j = 0; j < availableTweets.length; j++) {
      const tweet = availableTweets[j]
      const weight = tweet.weight ?? fallbackWeight
      accumulatedWeight += weight
      if (random <= accumulatedWeight) {
        selectedTweets.push(tweet)
        selectedIndex = j
        break
      }
    }

    if (selectedIndex !== -1) {
      const removedWeight = availableTweets[selectedIndex].weight ?? fallbackWeight
      remainingWeight -= removedWeight
      availableTweets.splice(selectedIndex, 1)
    }
  }

  return selectedTweets
}

export const topTweets = [...tweets].sort((a, b) => (b.weight ?? 1) - (a.weight ?? 1)).slice(0, 18)

export default tweets

jQuery(document).ready(function () {
  $kickbackSection = $(".kickback-section")
  $addKickback = $("#addKickback")
  $addKickback.on("click", function () {
    event.preventDefault()

    $kickbackSection.append(
      "<input type='text' id='kickback-tier' name='kickback-tier' />",
      "<input type='text' id='kickback-tier-description' name='kickback-tier-description'/>"
    )
  })
})

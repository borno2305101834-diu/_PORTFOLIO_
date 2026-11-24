// Client-side validation and AJAX-style demonstration for the coursework form.
$(function () {
  $("#contactForm").on("submit", function (event) {
    event.preventDefault();

    const name = $("#fullName").val().trim();
    const email = $("#email").val().trim();
    const topic = $("#topic").val();
    const message = $("#message").val().trim();
    const method = $("input[name='method']:checked").val();
    const status = $("#formStatus");

    if (!name || !email || !topic || !message || !method) {
      status.text("Please complete all required fields.").addClass("error");
      return;
    }

    // No backend endpoint is configured. This simulates a successful client-side submission.
    const formData = {
      name: name,
      email: email,
      preferredContact: method,
      topic: topic,
      message: message
    };

    status.removeClass("error").text("Thank you, " + formData.name + "! Your form passed validation (demo only).");
    this.reset();
  });
});

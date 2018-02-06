from django import forms

class HomepageForm(forms.Form):
    WEEK_DAYS = (('0', 'Sunday'),
                 ('1', 'Monday'),
                 ('2', 'Tuesday'),
                 ('3', 'Wednesday'),
                 ('4', 'Thursday'),
                 ('5', 'Friday'),
                 ('6', 'Saturday'))
    location = forms.CharField(widget = forms.TextInput(
            attrs = {
                "class": "form-control",
                "placeholder": "Enter destination"
            }
        )
    )
    start_date = forms.DateField()
    end_date = forms.DateField()
    category = forms.MultipleChoiceField(choices=WEEK_DAYS)

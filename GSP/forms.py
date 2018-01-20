from django import forms

class HomepageForm(forms.Form):
    location = forms.CharField()
    start_date = forms.DateField()
    end_date = forms.DateField()
    category = forms.MultipleChoiceField()
